import { test, expect } from '@playwright/test';
import * as constant from "../data/contants";
test('Login Page', async ({ browser, page }) => {
  await page.goto('https://www.facebook.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Facebook – log in or sign up/);
  await page.locator('xpath=//input[@id="email"]').clear();
  await page.locator('xpath=//input[@id="email"]').fill(constant.constant.username);
  await page.locator('xpath=//input[@id="pass"]').fill(constant.constant.password);
  await page.locator('xpath=//button[@name="login"]').click();
  await page.locator('xpath=//span[text()="Welcome to Facebook, Konika"]').isVisible();
  await page.pause();

});