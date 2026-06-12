import { Hono } from 'hono'
import { requestLogger } from './middleware/logger'

const app = new Hono()

app.use('*', requestLogger())

app.get('/robots.txt', (c) => {
  return new Response('User-agent: *\nAllow: /\n\nSitemap: https://hassanpi.com/sitemap.xml\n', {
    headers: { 'Content-Type': 'text/plain' },
  })
})

app.get('/resume.pdf', (c) => {
  const file = Bun.file(new URL('../public/hassan-javed-resume.pdf', import.meta.url))
  return new Response(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Muhammad-Hassan-Javed-Resume.pdf"',
    },
  })
})

// In production, nginx serves / and /portfolio as pre-rendered static HTML.
// Bun only handles routes nginx can't — 404 for unknown paths.
app.get('*', () => {
  return new Response(Bun.file(new URL('./client/index.html', import.meta.url)), {
    status: 404,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
})

export default app
