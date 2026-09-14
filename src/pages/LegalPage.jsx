import { useEffect } from 'react'
import { useCampaign } from '../App'

/**
 * Shared layout for legal pages. Each page passes a title, an intro and
 * sections. Text is template content - review before launch.
 */
export default function LegalPage({ title, intro, sections }) {
  const { brand } = useCampaign()

  useEffect(() => {
    document.title = `${title} - ${brand}`
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [title, brand])

  return (
    <main className="page legal">
      <div className="container legal__inner">
        <h1>{title}</h1>
        <p className="legal__intro">{intro}</p>
        {sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
        <p className="legal__updated">Last updated: 14 September 2026</p>
      </div>
    </main>
  )
}
