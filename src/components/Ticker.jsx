import { TICKER } from '../data/content'

/**
 * Scrolling market strip under the hero. The list is rendered twice and
 * the track slides -50% in a CSS loop, so the marquee is seamless. Purely
 * decorative (illustrative figures), hence aria-hidden.
 */
export default function Ticker() {
  const items = [...TICKER, ...TICKER]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((p, i) => (
          <span className="ticker__item" key={`${p.symbol}-${i}`}>
            <span className="ticker__symbol">{p.symbol}</span>
            <span className="ticker__price">{p.price}</span>
            <span className={`ticker__change ${p.change.startsWith('-') ? 'is-down' : 'is-up'}`}>
              {p.change}%
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
