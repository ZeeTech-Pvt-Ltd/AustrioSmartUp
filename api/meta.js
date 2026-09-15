/**
 * Serves index.html with per-keyword <title> / meta description / OG tags
 * injected server-side. Crawlers (Telegram, WhatsApp, Facebook, Google)
 * don't run JavaScript, so the client-side meta swap in App.jsx is
 * invisible to them - this function gives each ?f=<keyword> URL its own
 * preview. The SPA bundle still boots normally for real browsers.
 */

// Keep in sync with displayName() in src/App.jsx.
const displayName = (f) =>
  f
    .split('-')
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(' ')
    .replace(/\bAi\b/g, 'AI')
    .replace(/\bBtc\b/g, 'BTC')
    .replace(/\bAt\b/g, 'AT')

export default async function handler(req, res) {
  const url = new URL(req.url, `https://${req.headers.host}`)
  const f = (url.searchParams.get('f') || '').trim().replaceAll(' ', '-')
  const brand = f ? displayName(f) : 'Austrio Smart Up'

  // The entry is app.html (see scripts/postbuild.mjs) so that "/" is not
  // shadowed by a filesystem match and this function can run for it.
  const indexRes = await fetch(`${url.origin}/app.html`)
  if (!indexRes.ok) {
    res.status(502).send('app.html unavailable')
    return
  }
  let html = await indexRes.text()

  const title = `${brand} - Smart Trading Made Simple`
  const description = `${brand} analyses global markets in real time and shows you when to enter. Register free, talk to a personal manager, and start your first trade.`
  const ogDescription = `Register free and get a personal manager. ${brand} analyses 50+ market factors every second.`

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
  )
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`,
  )
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${ogDescription}" />`,
  )
  html = html.replace(
    /<meta\s+property="og:site_name"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:site_name" content="${brand}" />`,
  )

  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600')
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.status(200).send(html)
}
