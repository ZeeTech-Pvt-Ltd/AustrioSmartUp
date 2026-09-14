/**
 * All site copy lives here so it can be edited in one place.
 *
 * NOTE: testimonials, performance claims and the onboarding figures are
 * placeholder marketing copy written for the reference structure - the
 * wording is original, not scraped. Legal pages are template text.
 */

export const SITE_NAME = 'SkvivrelanATOM'
export const SITE_URL = 'http://austerio-smart-up.com/'
export const SUPPORT_EMAIL = 'support@austerio-smart-up.com'
export const COPYRIGHT_YEAR = new Date().getFullYear()

// Copy containing the {brand} token renders the active keyword (the ?f=
// param value, or SITE_NAME when absent) in its place.
export const fillBrand = (text, brand) => text.replaceAll('{brand}', brand)

// Registration forms POST JSON to this CORS-open endpoint. The offer
// name and subid are taken from the ?f= and &subid= query params so
// every traffic source is tagged through to the lead pipeline.
export const FORM_ENDPOINT = 'https://apexai-experts.com/homeMailAction.php'
export const DEFAULT_OFFER_NAME = 'SkvivrelanATOM'

export const HERO = {
  eyebrow: 'A new way to grow your capital',
  title: ['Markets never sleep. ', 'Neither should your earnings.'],
  lede: '{brand} watches the global markets around the clock and spots the setups worth acting on. You register, your personal manager walks you through your first deposit, and the software does the heavy lifting from there.',
  bullets: [
    'Free registration - no card required',
    'A dedicated manager calls you back',
    'Works on any device, any operating system',
  ],
}

export const STEPS = {
  heading: 'Getting started takes two simple steps',
  sub: 'From sign-up to your first earning session in under a day.',
  items: [
    {
      n: '1',
      title: 'Register and Verify',
      img: '/images/manager.jpg',
      imgAlt: 'A friendly support manager on a call with a new client',
      text: 'Fill in the short form and wait for your personal manager’s call. They confirm your details and set up your account for free.',
    },
    {
      n: '2',
      title: 'Deposit and Trade',
      img: '/images/candles.jpg',
      imgAlt: 'Candlestick chart moving upward on a trading screen',
      text: 'Make the required initial minimum deposit and start earning profits. Your manager stays with you while you find your footing.',
    },
  ],
}

export const WHY = {
  heading: 'Why is {brand} so successful?',
  items: [
    {
      icon: 'algorithm',
      title: 'Comprehensive Algorithm',
      text: 'The engine weighs 50+ market factors at once - momentum, volatility, order flow and more - before it flags a single opportunity.',
    },
    {
      icon: 'pulse',
      title: 'Real-time Market Analysis',
      text: 'Data is refreshed every second, so the picture you act on is the market as it is right now, not as it was five minutes ago.',
    },
    {
      icon: 'patterns',
      title: 'Works with Patterns',
      text: 'Markets repeat themselves. {brand} recognises the patterns that have paid off before and executes when they line up.',
    },
  ],
}

export const COMPATIBILITY = {
  heading: 'Works on every device',
  text: 'Windows, macOS, iOS or Android - if it has a browser, {brand} runs on it. No downloads, no installation, no maintenance.',
  devices: ['Windows', 'macOS', 'iOS', 'Android', 'Linux'],
}

export const TESTIMONIALS = {
  heading: 'People are already earning',
  items: [
    {
      name: 'Emma Richardson',
      city: 'Manchester',
      photo: '/images/emma.jpg',
      text: 'I knew nothing about trading when I joined. The manager explained everything patiently, and my first withdrawal arrived in three days. Genuinely surprised how smooth it all was.',
    },
    {
      name: 'Marcus Feld',
      city: 'Berlin',
      photo: '/images/marcus.jpg',
      text: 'The analysis really does update every second. I watched it flag a move in the morning that paid off by lunch. It feels like having a research team in your pocket.',
    },
    {
      name: 'Aisha Bello',
      city: 'Birmingham',
      photo: '/images/aisha.jpg',
      text: 'I started with the minimum deposit just to test the water. The patterns feature is what convinced me to stay - seeing the same setups work over and over builds real confidence.',
    },
  ],
}

export const FINAL_CTA = {
  heading: 'Turn small deposits into better financial habits',
  text: 'Most people who succeed did not start with a fortune. They started with a decision. Make yours today - registration is free and takes under two minutes.',
  bullets: [
    'Free account setup',
    'No hidden charges',
    'Withdraw your profits any time',
  ],
}

export const FAQ = {
  heading: 'Frequently asked questions',
  items: [
    {
      q: 'Is registration really free?',
      a: 'Yes. Creating an account costs nothing and no card is required. You only deposit when you are ready to start trading.',
    },
    {
      q: 'How much do I need to start?',
      a: 'There is a minimum initial deposit, and your personal manager will confirm the exact amount for your region when they call you.',
    },
    {
      q: 'Do I need trading experience?',
      a: 'No. {brand} was designed for people with no prior experience. Your manager guides you through setup and your first session.',
    },
    {
      q: 'Which devices are supported?',
      a: 'Any device with a modern browser - Windows, macOS, iOS, Android and Linux. Nothing to download or install.',
    },
    {
      q: 'How do withdrawals work?',
      a: 'Profits can be withdrawn at any time using the method you registered with. Processing times depend on your payment provider.',
    },
  ],
}

export const RISK_TEXT =
  'Trading FX, CFDs and Cryptocurrencies involves high risk and may not be suitable for all investors. ' +
  'You could lose some or all of your initial deposit. Never trade with money you cannot afford to lose. ' +
  'This website is for informational purposes only and does not constitute financial advice. ' +
  'Names, images and testimonials are used for illustration. We may receive referral commissions.'
