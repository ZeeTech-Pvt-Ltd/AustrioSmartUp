import { useCampaign } from '../App'
import { PORTFOLIO, fillBrand } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Portfolio() {
  const { brand } = useCampaign()
  const v = PORTFOLIO.visual

  return (
    <section className="section feat" id="portfolio">
      <div className="container feat-duo">
        <Reveal className="exp-visual">
          <div className="exp-media" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="exp-badge b2">
            <span className="dot" /> {v.badge}
          </div>
        </Reveal>

        <Reveal delay={120} className="feat-duo-copy">
          <span className="eyebrow">{PORTFOLIO.eyebrow}</span>
          <h2>
            {PORTFOLIO.title[0]}
            <span className="grad-text">{PORTFOLIO.title[1]}</span>
            {PORTFOLIO.title[2]}
          </h2>
          <p className="lead">{fillBrand(PORTFOLIO.lead, brand)}</p>
          <ul className="hero-checks">
            {PORTFOLIO.checks.map((c) => (
              <li key={c}>
                <span className="tick">
                  <Icon name="check" size={13} strokeWidth={2.4} />
                </span>
                {c}
              </li>
            ))}
          </ul>
          <div className="feat-duo-ctas">
            <a className="btn btn--primary" href="#signup">
              Register Now <Icon name="arrow-right" size={16} strokeWidth={2.2} />
            </a>
            <a className="btn btn--outline" href="#how-it-works">
              How It Works
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
