import type { MiddlewareHandler } from 'hono'

export function requestLogger(): MiddlewareHandler {
  return async (c, next) => {
    await next()
    const ip     = c.req.header('x-real-ip') ?? c.req.header('x-forwarded-for')?.split(',')[0].trim() ?? '-'
    const time   = new Date().toISOString()
    const method = c.req.method
    const path   = new URL(c.req.url).pathname
    const ua     = c.req.header('user-agent') ?? '-'
    const ref    = c.req.header('referer') ?? '-'
    const status = c.res.status
    console.log(`${time} ${ip} ${method} ${path} ${status} "${ua}" "${ref}"`)
  }
}
