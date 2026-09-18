import { useCampaign } from '../App'
import { HERO, fillBrand } from '../data/content'
import Icon from './Icon'
import RegistrationForm from './RegistrationForm'
import Reveal from './Reveal'
import Ticker from './Ticker'

export default function Hero() {
  const { brand } = useCampaign()

  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal>
            <span className="eyebrow">
              <Icon name="star" size={12} /> {HERO.eyebrow}
            </span>
            <h1>
              {fillBrand(HERO.title[0], brand)}
              <span className="grad-text">{HERO.title[1]}</span>
            </h1>
            <p className="hero__lede">{fillBrand(HERO.lede, brand)}</p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="hero__bullets">
              {HERO.bullets.map((b) => (
                <li key={b}>
                  <Icon name="check-circle" size={18} />
                  {b}
                </li>
              ))}
            </ul>

            <div className="hero__ctas">
              {HERO.ctas.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className={c.href === '#signup' ? 'btn btn--primary' : 'btn btn--outline'}
                >
                  {c.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="hero__stats">
              {HERO.stats.map((s) => (
                <div className="hero__stat" key={s.label}>
                  <span className="hero__stat-value">{s.value}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="hero__form">
          <div id="signup" className="signup-anchor" aria-hidden="true" />
          <RegistrationForm
            idPrefix="hero"
            title="Register Now"
            sub="It only takes about two minutes to get started"
            cta="Sign Up Now"
          />
        </Reveal>
      </div>
      <Ticker />
    </section>
  )
}
