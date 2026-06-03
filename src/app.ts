import { Hono } from 'hono'
import { requestLogger } from './middleware/logger'

const app = new Hono()

app.use('*', requestLogger())

app.get('/robots.txt', (c) => {
  return new Response('User-agent: *\nAllow: /\n', {
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

const shell = () =>
  new Response(Bun.file(new URL('./client/index.html', import.meta.url)), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })

// Known SPA routes
app.get('/', shell)
app.get('/portfolio', shell)

// Everything else is a 404 — serve the shell with a 404 status so React Router
// renders the NotFound page while crawlers still get the correct status code.
app.get('*', () => {
  return new Response(Bun.file(new URL('./client/index.html', import.meta.url)), {
    status: 404,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
})

export default app
