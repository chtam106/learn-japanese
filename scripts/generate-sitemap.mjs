import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE_URL = 'https://langwish.net'
const paths = [
  '/',
  '/alphabet',
  '/alphabet/hiragana',
  '/alphabet/katakana',
  '/alphabet/exercise',
  '/alphabet/exercise/romaji',
  '/alphabet/exercise/character',
  '/alphabet/exercise/listen',
  '/alphabet/exercise/script-pair',
]

const lastmod = new Date().toISOString().slice(0, 10)
const distDir = join(dirname(fileURLToPath(import.meta.url)), '../dist')

const urls = paths
  .map((path) => {
    const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
    const priority = path === '/' ? '1.0' : path === '/alphabet' ? '0.9' : '0.8'
    const changefreq = path.startsWith('/alphabet/exercise/') ? 'monthly' : 'weekly'

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(join(distDir, 'sitemap.xml'), sitemap)
console.log(`Wrote sitemap.xml with ${paths.length} URLs`)
