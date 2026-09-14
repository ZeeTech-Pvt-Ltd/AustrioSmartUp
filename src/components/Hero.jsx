import { useCampaign } from '../App'
import { HERO } from '../data/content'
import Icon from './Icon'
import RegistrationForm from './RegistrationForm'
import Reveal from './Reveal'

export default function Hero() {
  const { brand } = useCampaign()

  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal>
            <span className="eyebrow">
              <Icon name="pulse" size={14} /> {HERO.eyebrow}
            </span>
            <h1>
              {HERO.title[0]}
              <span className="grad-text">{HERO.title[1]}</span>
            </h1>
            <p className="hero__lede">{HERO.lede}</p>
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
            <p className="hero__note">
              <Icon name="shield" size={15} />
              Registration is free and takes under two minutes. {brand} is available in your region.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="hero__form">
          <div id="signup" className="signup-anchor" aria-hidden="true" />
          <div className="hero__form-glow" aria-hidden="true" />
          <RegistrationForm
            idPrefix="hero"
            title="Open your free account"
          />
        </Reveal>
      </div>
    </section>
  )
}
