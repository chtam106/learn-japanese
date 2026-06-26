import { expect, test, type Page } from '@playwright/test';

// English UI lives under the `/en` locale prefix (Vietnamese is the default at the root).
const SENTENCE_EXERCISE_PATH = '/en/alphabet/exercise/sentence';

// The romaji answer text lives in the polite live region; it stays in the DOM
// but is hidden via CSS until the learner asks for it.
const answerText = (page: Page) => page.locator('[aria-live="polite"] [lang="en"]').first();

test.describe('kana sentence romaji exercise', () => {
  test('keeps the answer hidden until the Show/Hide toggle is used', async ({ page }) => {
    await page.goto(SENTENCE_EXERCISE_PATH);

    const showAnswer = page.getByRole('button', { name: 'Show answer' });
    const hideAnswer = page.getByRole('button', { name: 'Hide answer' });

    await expect(showAnswer).toBeVisible();
    await expect(hideAnswer).toBeHidden();
    await expect(answerText(page)).toBeHidden();

    await showAnswer.click();
    await expect(answerText(page)).toBeVisible();
    await expect(hideAnswer).toBeVisible();

    await hideAnswer.click();
    await expect(answerText(page)).toBeHidden();
  });

  test('does not auto-reveal the answer after a correct submission', async ({ page }) => {
    await page.goto(SENTENCE_EXERCISE_PATH);

    // Peek at the expected romaji, hide it again, then answer correctly.
    await page.getByRole('button', { name: 'Show answer' }).click();
    const expected = (await answerText(page).textContent())?.trim() ?? '';
    expect(expected.length).toBeGreaterThan(0);
    await page.getByRole('button', { name: 'Hide answer' }).click();

    await page.getByPlaceholder('Type romaji').fill(expected);
    await page.getByRole('button', { name: 'Check' }).click();

    // The score confirms the answer was accepted...
    await expect(page.getByText(/Correct:\s*1\s*\//)).toBeVisible();
    // ...and the romaji answer is still NOT shown automatically.
    await expect(answerText(page)).toBeHidden();
  });
});
