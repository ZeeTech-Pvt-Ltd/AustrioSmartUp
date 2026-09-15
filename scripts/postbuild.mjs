import { rename } from 'node:fs/promises'

// Vercel serves filesystem matches before applying rewrites, so a root
// index.html would shadow the "/" -> /api/meta rewrite that injects
// per-keyword meta tags for crawlers. Renaming the entry to app.html
// lets the rewrite run; api/meta.js fetches /app.html to build its
// response. SPA navigation is unaffected (all routes rewrite to app.html).
await rename('dist/index.html', 'dist/app.html')
console.log('dist/index.html -> dist/app.html')
