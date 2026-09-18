import { readFile, writeFile, rename, unlink } from 'node:fs/promises'

// Vercel serves filesystem matches before applying rewrites, so a root
// index.html would shadow the "/" -> /api/meta rewrite that injects
// per-keyword meta tags for crawlers. Renaming the entry to app.html
// lets the rewrite run; api/meta.js fetches /app.html to build its
// response. SPA navigation is unaffected (all routes rewrite to app.html).
await rename('dist/index.html', 'dist/app.html')

// Inline the stylesheet into the HTML. The CSS is small (~10 KB gzipped)
// and inlining removes a render-blocking request on every first visit -
// the fastest LCP for a landing page. The .css file is deleted so no
// duplicate bytes ship.
let html = await readFile('dist/app.html', 'utf8')
// Only the local build asset - the Google Fonts link stays as-is.
const cssLink = html.match(/<link[^>]*rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"[^>]*>/)
if (cssLink) {
  const href = cssLink[0].match(/href="([^"]+)"/)
  if (href) {
    const css = await readFile(`dist${href[1]}`, 'utf8')
    html = html.replace(cssLink[0], `<style>\n${css}\n</style>`)
    await unlink(`dist${href[1]}`)
    await writeFile('dist/app.html', html)
    console.log('CSS inlined into app.html')
  }
} else {
  console.log('No local stylesheet link found - CSS already inlined')
}
