import { useCampaign } from '../App'
import { CTA_BANNER, fillBrand } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function BannerCta() {
  const { brand } = useCampaign()

  return (
    <section className="section banner-cta">
      <div className="container">
        <Reveal className="cta-banner">
          <div>
            <span className="eyebrow">{CTA_BANNER.eyebrow}</span>
            <h2>{CTA_BANNER.title}</h2>
            <p>{fillBrand(CTA_BANNER.text, brand)}</p>
          </div>
          <a className="btn btn-light" href="#signup">
            {CTA_BANNER.cta} <Icon name="arrow-right" size={16} strokeWidth={2.2} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
