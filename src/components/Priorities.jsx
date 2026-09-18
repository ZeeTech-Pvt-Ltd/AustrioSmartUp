import { useCampaign } from '../App'
import { PRIORITIES, fillBrand } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Priorities() {
  const { brand } = useCampaign()

  return (
    <section className="section prio" id="priorities">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{fillBrand(PRIORITIES.eyebrow, brand)}</span>
          <h2 className="section__title">
            {PRIORITIES.title[0]}
            <span className="grad-text">{PRIORITIES.title[1]}</span>
          </h2>
          <p className="section__sub">{PRIORITIES.lead}</p>
        </Reveal>

        <div className="prio-grid">
          {PRIORITIES.cards.map((c, i) => (
            <Reveal delay={i * 100} key={c.title}>
              <article className={`prio-card${c.alt ? ' alt' : ''}`}>
                <div className="prio-top">
                  <div className="big">
                    {c.big}
                    {c.bigNote && <small> {c.bigNote}</small>}
                  </div>
                  <div className="cap">{c.cap}</div>
                </div>
                <div className="prio-body">
                  <h3 className="prio-title">{c.title}</h3>
                  <div className="prio-sub">{c.sub}</div>
                  <ul className="prio-list">
                    {c.items.map((it) => (
                      <li key={it}>
                        <span className="tick">
                          <Icon name="check" size={13} strokeWidth={2.4} />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="tags">
                    {c.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
