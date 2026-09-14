import { useState } from 'react'
import { FAQ } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section faq" id="faq">
      <div className="container faq__inner">
        <Reveal>
          <h2 className="section__title">{FAQ.heading}</h2>
        </Reveal>
        <div className="faq__list">
          {FAQ.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="faq__q"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <Icon name="chevron-down" size={18} className="faq__chevron" />
                  </button>
                  <div className="faq__a" hidden={!isOpen}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
