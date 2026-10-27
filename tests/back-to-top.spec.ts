import { test, expect, type Page } from '@playwright/test';

// Wheel on desktop; Playwright can't swipe on mobile, so jump there instead
async function scrollDown(page: Page, isMobile: boolean, distance = 100_000) {
  if (isMobile) await page.evaluate((y) => window.scrollTo(0, y), distance);
  else await page.mouse.wheel(0, distance);
}

test.describe('back to top button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('is not shown at the top of the page', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Back to top' })).toBeHidden();
  });

  test('appears after scrolling down', async ({ page, isMobile }) => {
    await scrollDown(page, isMobile, 1000);
    await expect(page.getByRole('link', { name: 'Back to top' })).toBeVisible();
  });

  test('takes you back to the top and disappears', async ({ page, isMobile }) => {
    await scrollDown(page, isMobile);
    const btn = page.getByRole('link', { name: 'Back to top' });
    await expect(btn).toBeVisible();

    if (isMobile) await btn.tap();
    else await btn.click();

    await expect(page.getByRole('heading', { level: 1, name: 'Raffaele Cataldo' })).toBeInViewport();
    await expect(btn).toBeHidden();
  });
});
