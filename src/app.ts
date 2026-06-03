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

app.get('/styles/:file', (c) => {
  const file = Bun.file(new URL(`./client/styles/${c.req.param('file')}`, import.meta.url))
  return new Response(file, { headers: { 'Content-Type': 'text/css' } })
})

app.get('/dist/:file', (c) => {
  const file = Bun.file(new URL(`./client/dist/${c.req.param('file')}`, import.meta.url))
  return new Response(file, { headers: { 'Content-Type': 'application/javascript' } })
})

// SPA catch-all — serves the React shell for all other routes
app.get('*', () => {
  return new Response(Bun.file(new URL('./client/index.html', import.meta.url)), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
})

export default app
