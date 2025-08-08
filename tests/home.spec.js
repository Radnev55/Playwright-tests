const { test, expect } = require('@playwright/test');

test('Open homepage and check title', async ({ page }) => {
  await page.goto('/angularpractice/');
  await expect(page).toHaveTitle('ProtoCommerce');
});