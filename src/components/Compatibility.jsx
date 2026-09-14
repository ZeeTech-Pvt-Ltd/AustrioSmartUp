import { COMPATIBILITY } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

const deviceIcons = {
  Windows: 'monitor',
  macOS: 'apple',
  iOS: 'smartphone',
  Android: 'smartphone',
  Linux: 'monitor',
}

export default function Compatibility() {
  return (
    <section className="section compat" id="compatibility">
      <div className="container compat__inner">
        <Reveal>
          <h2 className="section__title">{COMPATIBILITY.heading}</h2>
          <p className="section__sub">{COMPATIBILITY.text}</p>
        </Reveal>
        <Reveal delay={140}>
          <ul className="compat__devices">
            {COMPATIBILITY.devices.map((d) => (
              <li key={d}>
                <Icon name={deviceIcons[d]} size={22} />
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
