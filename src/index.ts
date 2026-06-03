const htmlFile = Bun.file(new URL('./index.html', import.meta.url))
const pdfFile  = Bun.file(new URL('./public/hassan-javed-resume.pdf', import.meta.url))

function log(req: Request, status: number, ip: string): void {
  const time   = new Date().toISOString()
  const method = req.method
  const path   = new URL(req.url).pathname
  const ua     = req.headers.get('user-agent') ?? '-'
  const ref    = req.headers.get('referer') ?? '-'
  console.log(`${time} ${ip} ${method} ${path} ${status} "${ua}" "${ref}"`)
}

Bun.serve({
  port: Number(process.env.PORT) || 8086,

  fetch(req, server) {
    const forwarded = req.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0].trim() : (server.requestIP(req)?.address ?? '-')
    const path = new URL(req.url).pathname

    if (req.method === 'GET' && path === '/') {
      log(req, 200, ip)
      return new Response(htmlFile, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
    }

    if (req.method === 'GET' && path === '/resume.pdf') {
      log(req, 200, ip)
      return new Response(pdfFile, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="Muhammad-Hassan-Javed-Resume.pdf"',
        },
      })
    }

    log(req, 404, ip)
    return new Response('Not Found', { status: 404 })
  },
})
