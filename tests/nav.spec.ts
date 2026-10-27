import { test, expect } from '@playwright/test';

test.describe('desktop nav', { tag: '@desktop' }, () => {
  test('shows the links inline with no menu button', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation').getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByLabel('Open menu')).toBeHidden();
  });

  test('only offers a Home link off the home page', async ({ page }) => {
    const home = page.getByRole('navigation').getByRole('link', { name: 'Home', exact: true });
    await page.goto('/');
    await expect(home).toBeHidden();
    await page.goto('/case-studies/sic-app');
    await expect(home).toBeVisible();
  });
});

test.describe('mobile nav', { tag: '@mobile' }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // The links are only findable while the menu is open
  const menuLink = (page: import('@playwright/test').Page, name: string) =>
    page.getByRole('navigation').getByRole('link', { name, exact: true });

  test('opens and closes from the menu button', async ({ page }) => {
    await expect(menuLink(page, 'About')).toBeHidden();
    await page.getByLabel('Open menu').tap();
    await expect(menuLink(page, 'About')).toBeVisible();
    await page.getByLabel('Open menu').tap();
    await expect(menuLink(page, 'About')).toBeHidden();
  });

  test('closes when tapping page content outside it', async ({ page }) => {
    await page.getByLabel('Open menu').tap();
    await expect(menuLink(page, 'About')).toBeVisible();
    // Plain text, not a link — iOS treats taps on non-interactive content differently
    await page.getByRole('contentinfo').getByText('Raffaele Cataldo').tap();
    await expect(menuLink(page, 'About')).toBeHidden();
  });

  test('closes on Escape', async ({ page }) => {
    await page.getByLabel('Open menu').tap();
    await expect(menuLink(page, 'About')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(menuLink(page, 'About')).toBeHidden();
  });

  test('tapping a link takes you there and closes the menu', async ({ page }) => {
    await page.getByLabel('Open menu').tap();
    await menuLink(page, 'Contact').tap();
    await expect(page.getByRole('heading', { name: 'Contact Me' })).toBeInViewport();
    await expect(menuLink(page, 'About')).toBeHidden();
  });
});
