import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes, SITEMAP_PATHS } from '@/constants/routes.ts';
import { COURSE_SITEMAP_PATHS } from '@/constants/courses/index.ts';
import { SITE_URL } from '@/constants/site.ts';
import { withLocale } from '@/i18n/locale-routing.ts';

const lastmod = new Date().toISOString().slice(0, 10);
const distDir = join(dirname(fileURLToPath(import.meta.url)), '../dist');
const logicalPaths = Array.from(new Set([...SITEMAP_PATHS, ...COURSE_SITEMAP_PATHS]));

function absoluteUrl(logicalPath: string, locale: 'vi' | 'en') {
  const path = withLocale(logicalPath, locale);

  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function priorityFor(logicalPath: string) {
  if (logicalPath === routes.home) {
    return '1.0';
  }

  return logicalPath === routes.alphabet.index ? '0.9' : '0.8';
}

const urls = logicalPaths
  .flatMap((logicalPath) => {
    const viUrl = absoluteUrl(logicalPath, 'vi');
    const enUrl = absoluteUrl(logicalPath, 'en');
    const priority = priorityFor(logicalPath);
    const changefreq = logicalPath.startsWith(`${routes.alphabet.exercise.index}/`)
      ? 'monthly'
      : 'weekly';

    const alternates = [
      `    <xhtml:link rel="alternate" hreflang="vi" href="${viUrl}"/>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>`
    ].join('\n');

    return [viUrl, enUrl].map(
      (loc) => `  <url>
    <loc>${loc}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    );
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

writeFileSync(join(distDir, 'sitemap.xml'), sitemap);
console.log(`Wrote sitemap.xml with ${logicalPaths.length * 2} URLs`);
