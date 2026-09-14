import { useLocation } from 'react-router-dom'
import { useCampaign } from '../App'
import Icon from './Icon'

export default function Navbar() {
  const { brand } = useCampaign()
  const { search } = useLocation()

  return (
    <header className="nav">
      <div className="container nav__inner">
        {/* Keep ?f= and &subid= campaign params when heading home */}
        <a href={`/${search}`} className="nav__brand">
          <span className="nav__logo">
            <Icon name="atom-mark" size={22} strokeWidth={2} />
          </span>
          <span className="nav__name">{brand}</span>
        </a>
      </div>
    </header>
  )
}
