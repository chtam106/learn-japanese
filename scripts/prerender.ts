import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { preview } from 'vite';
import { SITEMAP_PATHS } from '@/constants/routes.ts';
import { COURSE_SITEMAP_PATHS } from '@/constants/courses/index.ts';
import { LOCALES, withLocale } from '@/i18n/locale-routing.ts';

const distDir = join(dirname(fileURLToPath(import.meta.url)), '../dist');
const PORT = 4318;
const CONCURRENCY = 8;

const logicalPaths = Array.from(new Set([...SITEMAP_PATHS, ...COURSE_SITEMAP_PATHS]));
const targets = Array.from(
  new Set(logicalPaths.flatMap((path) => LOCALES.map((locale) => withLocale(path, locale))))
);

/** Map a URL path to its static output file (`/` -> index.html, `/x` -> x/index.html). */
function outputFile(urlPath: string) {
  if (urlPath === '/') {
    return join(distDir, 'index.html');
  }

  return join(distDir, urlPath.replace(/^\//, ''), 'index.html');
}

async function run() {
  const server = await preview({ preview: { port: PORT, strictPort: true } });
  const base = `http://localhost:${PORT}`;
  const browser = await chromium.launch();
  const context = await browser.newContext();

  let cursor = 0;
  let done = 0;

  async function worker() {
    const page = await context.newPage();

    for (let index = cursor++; index < targets.length; index = cursor++) {
      const target = targets[index];

      await page.goto(`${base}${target}`, { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return Boolean(root && root.childElementCount > 0) && document.title.length > 0;
        },
        { timeout: 20000 }
      );

      const html = await page.content();
      const file = outputFile(target);
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, html);

      done += 1;
    }

    await page.close();
  }

  try {
    await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  } finally {
    await context.close();
    await browser.close();
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close((error) => (error ? reject(error) : resolve()));
    });
  }

  console.log(`Prerendered ${done} pages`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
