import app from './app'

Bun.serve({
  port: Number(process.env.PORT) || 8086,
  fetch(req, server) {
    // Resolve the real client IP and inject it before Hono middleware runs
    const forwarded = req.headers.get('x-forwarded-for')
    const ip = forwarded
      ? forwarded.split(',')[0].trim()
      : (server.requestIP(req)?.address ?? '-')

    const headers = new Headers(req.headers)
    headers.set('x-real-ip', ip)

    return app.fetch(new Request(req, { headers }))
  },
})
