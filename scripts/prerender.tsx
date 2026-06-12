import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from '../src/client/App'

const antiFouc = `(function(){var t=localStorage.getItem('theme');var s=window.matchMedia('(prefers-color-scheme: dark)').matches;var d=t==='dark'||(t!=='light'&&s);if(d)document.documentElement.classList.add('dark');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);})();`

const favicons = `
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />`

const routes = [
  { path: '/', output: 'public/index.html' },
  { path: '/portfolio', output: 'public/portfolio.html' },
]

const baseUrl = 'https://hassanpi.com'
const lastmod = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(({ path }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>
`

await Bun.write('public/sitemap.xml', sitemap)
console.log('Wrote public/sitemap.xml')

for (const { path, output } of routes) {
  const helmetContext: { helmet?: any } = {}

  const body = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  ${helmet.link.toString()}
  ${favicons}
  <script>${antiFouc}</script>
  <link rel="stylesheet" href="/dist/main.css" />
</head>
<body>
  <div id="root">${body}</div>
  <script type="module" src="/dist/main.js"></script>
</body>
</html>`

  await Bun.write(output, html)
  console.log(`Pre-rendered ${path} → ${output}`)
}
