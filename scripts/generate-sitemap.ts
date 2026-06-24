import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { routes, SITEMAP_PATHS } from '@/constants/routes.ts'
import { COURSE_SITEMAP_PATHS } from '@/constants/courses/index.ts'
import { SITE_URL } from '@/constants/site.ts'

const lastmod = new Date().toISOString().slice(0, 10)
const distDir = join(dirname(fileURLToPath(import.meta.url)), '../dist')
const sitemapPaths = Array.from(new Set([...SITEMAP_PATHS, ...COURSE_SITEMAP_PATHS]))

const urls = sitemapPaths
  .map((path) => {
    const loc = path === routes.home ? `${SITE_URL}/` : `${SITE_URL}${path}`
    const priority = path === routes.home ? '1.0' : path === routes.alphabet.index ? '0.9' : '0.8'
    const changefreq = path.startsWith(`${routes.alphabet.exercise.index}/`) ? 'monthly' : 'weekly'

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
console.log(`Wrote sitemap.xml with ${sitemapPaths.length} URLs`)
