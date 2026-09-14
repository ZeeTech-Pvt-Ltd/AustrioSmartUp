import { TESTIMONIALS } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section className="section section--alt testimonials" id="testimonials">
      <div className="container">
        <Reveal>
          <h2 className="section__title">{TESTIMONIALS.heading}</h2>
        </Reveal>
        <div className="testimonials__grid">
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="t-card">
              <div className="t-card__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon key={s} name="star-filled" size={14} />
                ))}
              </div>
              <p className="t-card__text">“{t.text}”</p>
              <div className="t-card__person">
                <img className="t-card__avatar" src={t.photo} alt={`Portrait of ${t.name}`} loading="lazy" />
                <span className="t-card__meta">
                  <strong>{t.name}</strong>
                  <small>{t.city}</small>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
