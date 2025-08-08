const { test, expect } = require('@playwright/test');

test('Add product to cart and verify badge', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  const badge = page.locator('.shopping_cart_badge');
  await expect(badge).toHaveText('1');
});
