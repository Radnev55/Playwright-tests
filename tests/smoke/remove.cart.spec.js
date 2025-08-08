const { test, expect } = require('@playwright/test');

test('Remove product from cart and verify badge disappears', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="remove-sauce-labs-backpack"]');

  const badge = page.locator('.shopping_cart_badge');
  await expect(badge).toHaveCount(0);
});
