import { useCampaign } from '../App'
import { STEPS, fillBrand } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Steps() {
  const { brand } = useCampaign()

  return (
    <section className="section how" id="how-it-works">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{STEPS.eyebrow}</span>
          <h2 className="section__title">
            {STEPS.heading[0]}
            <span className="grad-text">{STEPS.heading[1]}</span>
          </h2>
          <p className="section__sub">{STEPS.sub}</p>
        </Reveal>

        <div className="steps__grid">
          {STEPS.items.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="step-card">
              <span className="step-card__no">{s.n}</span>
              <div className={`step-card__ico${s.green ? ' step-card__ico--green' : ''}`}>
                <Icon name={s.icon} size={24} />
              </div>
              <h3>{s.title}</h3>
              <p>{fillBrand(s.text, brand)}</p>
              <a className="btn-link" href="#signup">
                {s.cta} <Icon name="arrow-right" size={16} strokeWidth={2.2} />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="how-strip">
          {STEPS.strip.map((t) => (
            <p key={t}>
              <span className="tick">
                <Icon name="check" size={13} strokeWidth={2.4} />
              </span>
              {t}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
