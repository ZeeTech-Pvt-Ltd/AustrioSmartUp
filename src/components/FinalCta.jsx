import { FINAL_CTA } from '../data/content'
import Icon from './Icon'
import RegistrationForm from './RegistrationForm'
import Reveal from './Reveal'

export default function FinalCta() {
  return (
    <section className="section section--alt final-cta" id="get-started">
      <div className="container final-cta__grid">
        <Reveal className="final-cta__copy">
          <h2 className="section__title">{FINAL_CTA.heading}</h2>
          <p className="section__sub">{FINAL_CTA.text}</p>
          <ul className="hero__bullets">
            {FINAL_CTA.bullets.map((b) => (
              <li key={b}>
                <Icon name="check-circle" size={18} />
                {b}
              </li>
            ))}
          </ul>
          <div className="pay">
            <p className="pay__label">
              <Icon name="shield" size={15} />
              Secure payments you can trust
            </p>
            <ul className="pay__grid">
              <li className="pay__tile">
                <span className="pay__visa">VISA</span>
              </li>
              <li className="pay__tile">
                <svg className="pay__mc" width="44" height="26" viewBox="0 0 44 26" aria-hidden="true">
                  <circle cx="17" cy="13" r="12" fill="#eb001b" />
                  <circle cx="27" cy="13" r="12" fill="#f79e1b" fillOpacity="0.92" />
                </svg>
                <span className="pay__name">Mastercard</span>
              </li>
              <li className="pay__tile">
                <span className="pay__pp">
                  Pay<span>Pal</span>
                </span>
              </li>
              <li className="pay__tile">
                <span className="pay__bank">
                  <Icon name="bank" size={20} />
                  Bank
                </span>
              </li>
            </ul>
            <p className="pay__note">
              <Icon name="lock" size={13} strokeWidth={2.2} />
              All transactions are protected with 256-bit SSL encryption
            </p>
          </div>
        </Reveal>
        <Reveal delay={140} className="final-cta__form">
          <RegistrationForm
            idPrefix="final"
            title="Register Now"
            sub="It only takes about two minutes to get started"
            cta="Sign Up Now"
          />
        </Reveal>
      </div>
    </section>
  )
}
