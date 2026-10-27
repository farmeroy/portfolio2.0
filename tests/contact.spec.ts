import { test, expect } from '@playwright/test';

test.describe('contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
  });

  test('has the fields Netlify needs to capture submissions', async ({ page }) => {
    const form = page.locator('form[name="contact"]');
    await expect(form).toHaveAttribute('data-netlify', 'true');
    await expect(form.locator('input[name="form-name"]')).toHaveValue('contact');
    await expect(form.locator('input[name="bot-field"]')).toBeHidden();
  });

  test('blocks submission when fields are empty or invalid', async ({ page }) => {
    const email = page.getByLabel('Email address');
    const message = page.getByLabel('Your message');

    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page).toHaveURL(/#contact$/);
    expect(await email.evaluate((el: HTMLInputElement) => el.validity.valueMissing)).toBe(true);

    await email.fill('not-an-email');
    await message.fill('hello');
    expect(await email.evaluate((el: HTMLInputElement) => el.validity.typeMismatch)).toBe(true);

    await email.fill('someone@example.com');
    expect(await page.locator('form[name="contact"]').evaluate((f: HTMLFormElement) => f.checkValidity())).toBe(true);
  });
});
