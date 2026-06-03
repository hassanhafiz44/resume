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

// SPA catch-all — serves the React shell for all other routes
// /dist/* (JS bundle + CSS) is served directly by nginx from public/
app.get('*', () => {
  return new Response(Bun.file(new URL('./client/index.html', import.meta.url)), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
})

export default app
