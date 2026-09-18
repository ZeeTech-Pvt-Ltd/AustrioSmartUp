import { useCampaign } from '../App'
import { WHATIS, TV_CANDLES, fillBrand } from '../data/content'
import Reveal from './Reveal'

// Upward line used by the AI Live chart (illustrative geometry).
const CHART_LINE =
  'M0 170 C52 154 88 124 132 132 C168 138 198 100 240 92 C282 84 314 110 352 90 C388 72 420 46 462 40 C498 34 530 40 560 24'
const CHART_FILL = `${CHART_LINE} L560 212 L0 212 Z`

/** Mock "AI Live" dashboard card shown beside the what-is copy. */
function TvCard({ brand }) {
  return (
    <div className="tv-card" aria-hidden="true">
      <div className="tv-head">
        <span className="tv-brand">{fillBrand(WHATIS.tv.brand, brand)}</span>
        <span className="tv-live">
          <span className="dot" /> Live
        </span>
      </div>

      <div className="tv-body">
        <div>
          <div className="tv-label">{WHATIS.tv.label}</div>
          <div className="tv-bal">{WHATIS.tv.balance}</div>
        </div>
        <span className="tv-pct">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M6 10V2.5M2.5 6 6 2.5 9.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {WHATIS.tv.change}
        </span>
      </div>

      <div className="tv-chart">
        <svg viewBox="0 0 560 212" role="img" aria-label="Upward trending automated trading chart">
          <defs>
            <linearGradient id="tvGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0476a7" stopOpacity="0.32" />
              <stop offset="1" stopColor="#0476a7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="rgba(4, 118, 167, 0.14)" strokeDasharray="2 6">
            <path d="M0 40 H560" />
            <path d="M0 90 H560" />
            <path d="M0 140 H560" />
            <path d="M0 190 H560" />
          </g>
          <path d={CHART_FILL} fill="url(#tvGrad)" />
          <path d={CHART_LINE} className="tv-path" />
          <path d="M462 40 H560" className="tv-target" />
          <circle cx="560" cy="24" r="7" className="tv-halo" />
          <circle cx="560" cy="24" r="4" className="tv-dot" />
        </svg>
        <span className="tv-coin">$</span>
      </div>

      <div className="tv-candles">
        {TV_CANDLES.map((c, i) => (
          <div className={`tv-candle ${c.up ? 'tv-up' : 'tv-dn'}`} key={i}>
            <i className="w" style={{ top: c.wT, height: c.wH }} />
            <i className="b" style={{ top: c.bT, height: c.bH }} />
          </div>
        ))}
      </div>

      <div className="tv-foot">
        {WHATIS.tv.stats.map((s) => (
          <span className="tv-stat" key={s.label}>
            {s.label} <b>{s.value}</b>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function WhatIs() {
  const { brand } = useCampaign()

  return (
    <section className="section whatis" id="what-is">
      <div className="container whatis__inner">
        <Reveal className="whatis__visual">
          <TvCard brand={brand} />
        </Reveal>
        <Reveal delay={120} className="whatis__copy">
          <h2>{fillBrand(WHATIS.heading, brand)}</h2>
          {WHATIS.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{fillBrand(p, brand)}</p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
