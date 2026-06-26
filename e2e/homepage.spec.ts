import { expect, test } from '@playwright/test';

test.describe('homepage metadata', () => {
  test('uses the CHT branding for the document and social titles', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Nihongoes | Learn Japanese with CHT');

    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', 'Nihongoes | Learn Japanese with CHT');
  });
});
