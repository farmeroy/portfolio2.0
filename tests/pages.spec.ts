import { readdirSync } from 'node:fs';
import { test, expect, type Page } from '@playwright/test';

const caseStudies = readdirSync(new URL('../src/content/case-studies', import.meta.url))
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace(/\.md$/, ''));

async function expectImagesLoaded(page: Page) {
  const images = page.getByRole('main').getByRole('img');
  for (const img of await images.all()) {
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
  }
}

test('home page renders every project card with images', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Raffaele Cataldo' })).toBeVisible();
  await expect(page.getByRole('article').first()).toBeVisible();
  await expectImagesLoaded(page);
});

for (const slug of caseStudies) {
  test(`case study "${slug}" renders with images and no horizontal scroll`, async ({ page }) => {
    await page.goto(`/case-studies/${slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expectImagesLoaded(page);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
}

test('unknown routes show the 404 page', async ({ page }) => {
  const res = await page.goto('/does-not-exist');
  expect(res?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
});
