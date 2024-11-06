import { test, expect } from '@playwright/test';

test('Login Page', async ({ browser, page }) => {
  await page.goto('https://www.facebook.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Facebook – log in or sign up/);
});