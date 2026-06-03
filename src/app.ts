import { Hono } from 'hono'
import { requestLogger } from './middleware/logger'

const app = new Hono()

app.use('*', requestLogger())

app.get('/resume.pdf', (c) => {
  const file = Bun.file(new URL('../public/hassan-javed-resume.pdf', import.meta.url))
  return new Response(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Muhammad-Hassan-Javed-Resume.pdf"',
    },
  })
})

// Read the HTML shell once at startup
const htmlTemplate = await Bun.file(new URL('./client/index.html', import.meta.url)).text()

/**
 * Inject a server-side canonical <link> into the HTML shell so Googlebot
 * sees the correct canonical URL before JavaScript runs.
 * react-helmet-async still sets it client-side as well (redundant but harmless).
 */
function htmlWithCanonical(canonical: string): string {
  return htmlTemplate.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n</head>`)
}

// Per-route canonical injection
app.get('/', (c) => new Response(htmlWithCanonical('https://hassanpi.com/'), {
  headers: { 'Content-Type': 'text/html; charset=utf-8' },
}))

app.get('/portfolio', (c) => new Response(htmlWithCanonical('https://hassanpi.com/portfolio'), {
  headers: { 'Content-Type': 'text/html; charset=utf-8' },
}))

// Remaining routes (future pages) — no canonical injected at server level
// /dist/* (JS bundle + CSS) is served directly by nginx from public/
app.get('*', (c) => new Response(htmlTemplate, {
  headers: { 'Content-Type': 'text/html; charset=utf-8' },
}))

export default app
