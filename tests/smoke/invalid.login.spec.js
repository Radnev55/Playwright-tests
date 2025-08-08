const { test, expect } = require('@playwright/test');

test('Login with invalid credentials shows error', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'invalid_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');
  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
});
