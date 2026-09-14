import { useLocation } from 'react-router-dom'
import { useCampaign } from '../App'
import { COPYRIGHT_YEAR, RISK_TEXT } from '../data/content'
import Icon from './Icon'

export default function Footer() {
  const { brand } = useCampaign()
  const { search } = useLocation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Keep ?f= and &subid= campaign params when heading home */}
          <a href={`/${search}`} className="footer__brand">
            <span className="nav__logo">
              <Icon name="atom-mark" size={22} strokeWidth={2} />
            </span>
            <span>{brand}</span>
          </a>
          <ul className="footer__links">
            <li>
              <a href="/terms">Terms of Use</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/risk-disclosure">Risk Disclaimer</a>
            </li>
          </ul>
        </div>
        <p className="footer__risk">{RISK_TEXT}</p>
        <p className="footer__copy">
          {brand} © {COPYRIGHT_YEAR}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
