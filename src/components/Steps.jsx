import { STEPS } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Steps() {
  return (
    <section className="section steps" id="how-it-works">
      <div className="container">
        <Reveal>
          <h2 className="section__title">{STEPS.heading}</h2>
          <p className="section__sub">{STEPS.sub}</p>
        </Reveal>
        <div className="steps__grid">
          {STEPS.items.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="step-card">
              <span className="step-card__num">{s.n}</span>
              <div className="step-card__media">
                <img src={s.img} alt={s.imgAlt} loading="lazy" />
              </div>
              <div className="step-card__body">
                <div className="step-card__icon">
                  <Icon name={s.n === '1' ? 'phone' : 'check'} size={22} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
