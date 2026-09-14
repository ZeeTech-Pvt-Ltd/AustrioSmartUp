import { WHY } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function WhyUs() {
  return (
    <section className="section section--alt why" id="why-us">
      <div className="container">
        <Reveal>
          <h2 className="section__title">{WHY.heading}</h2>
        </Reveal>
        <div className="why__grid">
          {WHY.items.map((f, i) => (
            <Reveal key={f.title} delay={i * 120} className="why-card">
              <span className="why-card__icon">
                <Icon name={f.icon} size={26} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
