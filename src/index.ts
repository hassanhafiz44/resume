import index from './index.html'

Bun.serve({
  port: Number(process.env.PORT) || 8086,
  routes: {
    '/': index,
    '/resume.pdf': () => {
      const file = Bun.file(new URL('./public/hassan-javed-resume.pdf', import.meta.url))
      return new Response(file, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="Muhammad-Hassan-Javed-Resume.pdf"',
        },
      })
    },
  },
})
