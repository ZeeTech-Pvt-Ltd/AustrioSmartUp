/**
 * All site copy lives here so it can be edited in one place.
 *
 * NOTE: testimonials, performance claims and the onboarding figures are
 * placeholder marketing copy written for the reference structure - the
 * wording is original, not scraped. Legal pages are template text.
 */

export const SITE_NAME = 'Austrio Smart Up'
export const SITE_URL = 'https://austerio-smart-up.com/'
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
  eyebrow: 'Chosen by traders worldwide',
  title: ['{brand} ', 'Automated Trading Platform'],
  lede: '{brand} brings AI-powered strategies, live market signals and dependable security together in one straightforward place - a smart trading platform built for every experience level.',
  bullets: [
    'AI strategies that trade for you, around the clock',
    'Live market tracking and alerts, day and night',
    'Secure, clear, and built for every experience level',
  ],
  ctas: [
    { label: 'Register Now', href: '#signup' },
    { label: 'How It Works', href: '#how-it-works' },
  ],
  stats: [
    { value: '4M+', label: 'Verified users' },
    { value: '4.8★', label: 'Community score' },
    { value: '$500M+', label: 'Client deposits' },
  ],
}

export const WHATIS = {
  heading: 'What is {brand}?',
  paragraphs: [
    '{brand} is an AI-powered automated trading platform. The system monitors live market data 24/7 across crypto, forex, equities, and commodities, then either places trades automatically on your behalf or hands you the signals to trade manually. Accounts open with a minimum deposit of $250, with no subscription fee.',
    'The platform is built for traders who want market exposure without reading charts all day. You keep full control of your account and can withdraw at any time. {brand} provides technology and information tools only - it does not give personal financial advice.',
  ],
  tv: {
    brand: '{brand} AI',
    label: 'Portfolio Value',
    balance: '$248,521.90',
    change: '18.4%',
    stats: [
      { label: 'AI Signal', value: 'BUY' },
      { label: 'Win rate', value: '92.4%' },
      { label: 'Pairs', value: '65+' },
      { label: 'Markets', value: '24/7' },
    ],
  },
}

// Candlestick geometry for the AI Live card chart (illustrative).
export const TV_CANDLES = [
  { up: true, bT: 30, bH: 14, wT: 26, wH: 22 },
  { up: false, bT: 26, bH: 12, wT: 22, wH: 20 },
  { up: true, bT: 28, bH: 16, wT: 24, wH: 24 },
  { up: false, bT: 24, bH: 10, wT: 20, wH: 18 },
  { up: true, bT: 26, bH: 14, wT: 22, wH: 22 },
  { up: true, bT: 20, bH: 18, wT: 16, wH: 26 },
  { up: false, bT: 22, bH: 12, wT: 18, wH: 20 },
  { up: true, bT: 16, bH: 16, wT: 12, wH: 24 },
  { up: true, bT: 14, bH: 18, wT: 10, wH: 26 },
  { up: false, bT: 16, bH: 12, wT: 12, wH: 20 },
  { up: true, bT: 10, bH: 18, wT: 6, wH: 28 },
  { up: true, bT: 8, bH: 20, wT: 4, wH: 28 },
]

export const EXPERIENCE = {
  eyebrow: 'The platform',
  title: ['Experience Smarter Trading with ', 'AI-Driven Precision'],
  lead: 'Clear, secure, and open to traders of every level. {brand} pairs intelligent automation with live market analysis to deliver a fast and streamlined trading experience.',
  rows: [
    {
      icon: 'algorithm',
      title: 'Advanced AI Technologies',
      text: 'At the heart of the platform is intelligent automation. {brand} studies live markets and acts on opportunities across multiple asset classes, so the work happens for you while you stay in control of your account.',
      points: [
        '24/7 automated analysis of live markets',
        'Signals across multiple asset classes in one place',
        'Hands-free trading while you stay in control',
        'Clear visibility into every automated action',
      ],
    },
    {
      icon: 'patterns',
      title: 'AI-Powered Trading Engine',
      text: 'Our adaptive engine responds the moment market conditions shift. Cryptocurrency trading carries risk by nature, but a transparent approach and proactive technology give you access to tools built for speed and clarity.',
      points: [
        'Adapts instantly when market conditions shift',
        'Real-time signals with no hidden steps',
        'Built for speed and clarity in every market',
        'Active around the clock on your behalf',
      ],
    },
    {
      icon: 'chart',
      title: 'Simple and Clear Investing',
      text: 'Whether you are brand new to trading or a seasoned investor, {brand} keeps things simple. Complex concepts are broken down into clear steps, so diversifying your portfolio stays easy and understandable.',
      points: [
        'Clean, jargon-free guidance for every level',
        'Complex concepts broken into clear steps',
        'Diversify your portfolio in just a few clicks',
        'Designed for beginners and seasoned traders alike',
      ],
    },
    {
      icon: 'monitor',
      title: 'Convenient and Reliable Management',
      text: 'Your dashboard puts everything in one place - trades, performance, and signals - so you always know exactly where you stand. That clarity is part of what makes {brand} a platform you can rely on.',
      points: [
        'Trades, performance, and signals in one dashboard',
        'Withdraw your funds whenever you choose',
        'Your full activity history at a glance',
        'Reliable account access around the clock',
      ],
    },
  ],
}

export const PRIORITIES = {
  eyebrow: 'Why {brand}',
  title: ['Our ', 'priorities'],
  lead: 'Security, ease of use, and openness - at every step.',
  cards: [
    {
      big: '95%',
      cap: 'cold storage',
      title: 'Security',
      sub: 'Steps we take to help keep your funds safe',
      items: [
        '95% of funds held in cold storage',
        'Two-factor authentication and 256-bit SSL encryption',
        'Strong data-privacy protections',
      ],
      tags: ['SSL', '2FA'],
    },
    {
      big: '3',
      bigNote: 'clicks',
      cap: 'to start',
      alt: true,
      title: 'Simplicity',
      sub: 'Designed for everyone, not just experts',
      items: [
        'A 3-click path to your first trade',
        'Automated AI trading assistant',
        'An interface that suits every user level',
      ],
      tags: ['AI-Powered'],
    },
    {
      big: '0',
      cap: 'hidden fees',
      title: 'Transparency',
      sub: 'No surprises, ever',
      items: [
        'Upfront pricing from day one',
        'No hidden fees',
        'Live reserve audits',
      ],
      tags: ['Live audits'],
    },
  ],
}

export const CTA_BANNER = {
  eyebrow: 'Driven by Innovation',
  title: 'Built for Every Trader',
  text: '{brand} is built by a team of innovators, analysts, and engineers who are committed to advancing the world of automated trading. Join thousands of verified traders today.',
  cta: 'Register Now',
}

export const PORTFOLIO = {
  eyebrow: 'Portfolio management',
  title: ['Manage Your ', 'Portfolio with Data-Driven', ' Trading'],
  lead: 'Through the official {brand} platform, traders get a clean, data-first trading experience - real-time performance tracking and tools that are simple to understand and use.',
  checks: [
    'Live performance analytics',
    'Straightforward guidance at every step',
    'Withdraw your funds whenever you need to',
  ],
  visual: {
    badge: 'Data-driven',
  },
}

// Illustrative market strip under the hero - placeholder figures.
export const TICKER = [
  { symbol: 'BTC/USD', price: '61,248', change: '+2.4' },
  { symbol: 'ETH/USD', price: '3,412', change: '+1.8' },
  { symbol: 'EUR/USD', price: '1.0842', change: '+0.12' },
  { symbol: 'AUD/USD', price: '0.6631', change: '+0.08' },
  { symbol: 'XAU/USD', price: '2,318', change: '-0.22' },
  { symbol: 'S&P 500', price: '5,682', change: '+0.44' },
  { symbol: 'NASDAQ', price: '18,291', change: '+0.31' },
  { symbol: 'GBP/USD', price: '1.2785', change: '-0.05' },
]

export const STEPS = {
  eyebrow: 'Simple by design',
  heading: ['Get Started in ', '3 Easy Steps'],
  sub: 'A clear, guided path from sign-up to your first trade - with no jargon, no complications, and nothing extra to figure out.',
  items: [
    {
      n: 'STEP 1',
      icon: 'user',
      title: 'Create Your Account',
      text: 'Getting started only takes a few minutes. Enter your name, email, and phone number, and your account is ready - protected by two-factor authentication from the moment it is created.',
      cta: 'Start now',
    },
    {
      n: 'STEP 2',
      icon: 'wallet',
      green: true,
      title: 'Deposit Funds',
      text: 'Begin with as little as $250. We support credit and debit cards, bank transfers, and leading e-wallets, and deposits reach your account within minutes - no waiting around, no hidden charges.',
      cta: 'Deposit now',
    },
    {
      n: 'STEP 3',
      icon: 'chart',
      title: 'Start Trading',
      text: 'Let the AI trade fully automatically, or take the manual route - the decision is yours. {brand} watches the markets 24/7, places trades on your behalf when automated mode is on, and keeps your balance up to date in real time.',
      cta: 'Get started',
    },
  ],
  strip: [
    'Zero hidden fees',
    'Withdraw whenever you like',
    'No monthly subscriptions',
    'Leave when you want',
  ],
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
  'We may receive referral commissions.'
