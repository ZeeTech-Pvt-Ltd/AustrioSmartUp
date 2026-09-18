import { useCampaign } from '../App'
import { EXPERIENCE, fillBrand } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Experience() {
  const { brand } = useCampaign()

  return (
    <section className="section exp-sec" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{EXPERIENCE.eyebrow}</span>
          <h2 className="section__title">
            {EXPERIENCE.title[0]}
            <span className="grad-text">{EXPERIENCE.title[1]}</span>
          </h2>
          <p className="section__sub">{fillBrand(EXPERIENCE.lead, brand)}</p>
        </Reveal>

        <div className="exp-grid">
          {EXPERIENCE.rows.map((r, i) => (
            <Reveal delay={i * 100} className="exp-item" key={r.title}>
              <div className="exp-item__ico">
                <Icon name={r.icon} size={24} />
              </div>
              <h3>{r.title}</h3>
              <p>{fillBrand(r.text, brand)}</p>
              <ul className="exp-points">
                {r.points.map((p) => (
                  <li key={p}>
                    <span className="tick">
                      <Icon name="check" size={13} strokeWidth={2.4} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
