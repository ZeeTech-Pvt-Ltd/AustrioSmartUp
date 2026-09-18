import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import 'intl-tel-input/styles'
import Icon from './Icon'
import PaymentMarks from './PaymentMarks'
import { useCampaign } from '../App'
import { FORM_ENDPOINT } from '../data/content'

const STATUS = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' }

const initialFields = { firstName: '', lastName: '', email: '' }

// Resolve the visitor's country from their IP, trying CORS-open services
// in order. ipapi.co Cloudflare-blocks localhost, so ipwho.is leads the
// chain and keeps the switch working in dev too. Falls back to null → GB.
async function resolveCountry() {
  const sources = [
    () =>
      fetch('https://ipwho.is/')
        .then((r) => r.json())
        .then((d) => (d.success ? d.country_code : null)),
    () =>
      fetch('https://ipapi.co/json/')
        .then((r) => r.json())
        .then((d) => d.country_code || null),
  ]
  for (const source of sources) {
    try {
      const cc = await source()
      if (cc) return cc.toLowerCase()
    } catch {
      // blocked / offline - try the next source
    }
  }
  return null
}

/**
 * Registration form (hero + final CTA):
 * - required first/last name, email, valid international phone
 * - honeypot "website" field: bots that fill it get silently dropped
 * - phone field shows flag + dial code + placeholder immediately (light
 *   chunk); libphonenumber utils load on first focus or after 4s idle
 * - POSTs JSON {firstName, lastName, email, phone, offerName, subid}
 *   with the phone in full international format
 */
export default function RegistrationForm({ idPrefix = 'reg', title, sub, cta = 'Start now' }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { offerName, subid } = useCampaign()
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState(STATUS.idle)
  const [phoneError, setPhoneError] = useState('')
  const honeypotRef = useRef(null)
  const phoneInputRef = useRef(null)
  const itiRef = useRef(null)
  const moduleRef = useRef(null) // intl-tel-input factory (has attachUtils)
  const utilsPromiseRef = useRef(null)
  const utilsRequestedRef = useRef(false)

  // Loads libphonenumber and attaches it to the widget. Called on first
  // focus or after 4s idle - the field already renders its flag, dial
  // code and placeholder without it.
  const requestUtils = () => {
    if (utilsRequestedRef.current || !moduleRef.current) return
    utilsRequestedRef.current = true
    utilsPromiseRef.current = moduleRef.current
      .attachUtils(() => import('intl-tel-input/utils'))
      .catch(() => null)
  }

  useEffect(() => {
    if (!phoneInputRef.current) return
    let cancelled = false
    let iti = null
    const timers = []

    import('intl-tel-input').then(({ default: intlTelInput }) => {
      if (cancelled || !phoneInputRef.current) return
      moduleRef.current = intlTelInput
      iti = intlTelInput(phoneInputRef.current, {
        initialCountry: 'gb', // visible default; switched to the visitor's country below
        separateDialCode: true,
        placeholderNumberPolicy: 'AGGRESSIVE', // country-specific example placeholder
        placeholderNumberType: 'MOBILE',
      })
      itiRef.current = iti

      // Load the validation utils on first focus or after 4s idle.
      const input = phoneInputRef.current
      input.addEventListener('focus', requestUtils, { once: true })
      timers.push(window.setTimeout(requestUtils, 4000))

      // Switch to the visitor's country from their IP once it resolves
      // (never clobber a number already typed). Delayed 2s so the
      // lookup doesn't compete with critical resources.
      timers.push(
        window.setTimeout(() => {
          resolveCountry().then((cc) => {
            if (cancelled || !cc || cc === 'gb' || phoneInputRef.current.value) return
            itiRef.current?.setSelectedCountry(cc)
          })
        }, 2000),
      )
    })

    return () => {
      cancelled = true
      phoneInputRef.current?.removeEventListener('focus', requestUtils)
      timers.forEach((t) => window.clearTimeout(t))
      iti?.destroy()
      itiRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setField = (name) => (e) =>
    setFields((f) => ({
      ...f,
      [name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Honeypot condition: silently drop submissions from bots.
    if (honeypotRef.current?.value) return

    // Phone condition: must be a valid number for the selected country.
    const iti = itiRef.current
    const rawValue = phoneInputRef.current?.value.trim() || ''

    // isValidNumber() throws until the utils are attached, so probe
    // defensively: null = utils still loading.
    const tryValid = () => {
      try {
        return iti.isValidNumber()
      } catch {
        return null
      }
    }

    let valid = iti ? tryValid() : true
    if (valid === null) {
      // Utils still loading - trigger now and wait briefly so we can
      // validate instead of passing a garbage number through.
      requestUtils()
      for (let i = 0; i < 30 && valid === null; i += 1) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        valid = tryValid()
      }
    }

    let phone = null
    try {
      phone = iti?.getNumber() || null // throws until utils are attached
    } catch {
      phone = null
    }
    phone = phone || rawValue
    if (!phone) {
      setPhoneError('Please enter a valid phone number')
      return
    }
    if (valid === false) {
      setPhoneError('Please enter a valid phone number')
      return
    }
    setPhoneError('')

    setStatus(STATUS.loading)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fields.firstName,
          lastName: fields.lastName,
          email: fields.email,
          phone,
          offerName,
          subid,
        }),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      setStatus(STATUS.success)
      setFields(initialFields)
      iti?.setNumber('')
      // Carry the ?f= and &subid= params so the thank-you page shows the
      // keyword this form was submitted for.
      navigate(`/thank-you${location.search}`)
    } catch {
      // Endpoint rate-limits to 3 attempts / 5 min per IP.
      setStatus(STATUS.error)
    }
  }

  return (
    <div className="form-card">
      {title && <h2 className="form-card__title">{title}</h2>}
      {sub && <p className="form-card__sub">{sub}</p>}
      <form onSubmit={handleSubmit} noValidate={false}>
        {/* Honeypot - hidden from real users, bots fill it and get dropped */}
        <input
          ref={honeypotRef}
          className="visually-hidden"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="form-row">
          <label className="form-field">
            <span>First Name</span>
            <input
              id={`${idPrefix}-first`}
              type="text"
              name="first_name"
              placeholder="John"
              autoComplete="given-name"
              value={fields.firstName}
              onChange={setField('firstName')}
              required
            />
          </label>
          <label className="form-field">
            <span>Last Name</span>
            <input
              id={`${idPrefix}-last`}
              type="text"
              name="last_name"
              placeholder="Doe"
              autoComplete="family-name"
              value={fields.lastName}
              onChange={setField('lastName')}
              required
            />
          </label>
        </div>

        <label className="form-field">
          <span>Email Address</span>
          <input
            id={`${idPrefix}-email`}
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={fields.email}
            onChange={setField('email')}
            required
          />
        </label>

        <div className="form-field">
          <span>Phone Number</span>
          <div className="phone-iti">
            <input
              ref={phoneInputRef}
              id={`${idPrefix}-phone`}
              type="tel"
              name="phone"
              placeholder="7911 123 456"
              autoComplete="tel"
              aria-label="Phone number"
              required
            />
          </div>
          {phoneError && <span className="phone-error">{phoneError}</span>}
        </div>

        {status === STATUS.error && (
          <div className="form-message err" role="alert">
            Something went wrong. Please try again shortly.
          </div>
        )}

        <button className="btn btn--primary btn--block" type="submit" disabled={status === STATUS.loading}>
          {status === STATUS.loading ? 'Processing…' : cta}
          {status !== STATUS.loading && <Icon name="arrow-right" size={16} strokeWidth={2.2} />}
        </button>
        <p className="legal">
          By entering your personal information and clicking the button, you accept the{' '}
          <a href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and{' '}
          <a href="/terms" target="_blank" rel="noreferrer">Terms of Use</a> of the website.
        </p>
        <PaymentMarks />
      </form>
    </div>
  )
}
