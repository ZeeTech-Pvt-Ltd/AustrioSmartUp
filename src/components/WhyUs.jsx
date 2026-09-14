import { useCampaign } from '../App'
import { WHY, fillBrand } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function WhyUs() {
  const { brand } = useCampaign()

  return (
    <section className="section section--alt why" id="why-us">
      <div className="container">
        <Reveal>
          <h2 className="section__title">{fillBrand(WHY.heading, brand)}</h2>
        </Reveal>
        <div className="why__grid">
          {WHY.items.map((f, i) => (
            <Reveal key={f.title} delay={i * 120} className="why-card">
              <span className="why-card__icon">
                <Icon name={f.icon} size={26} />
              </span>
              <h3>{f.title}</h3>
              <p>{fillBrand(f.text, brand)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
