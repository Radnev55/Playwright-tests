const { test, expect } = require('@playwright/test');

test('Complete checkout process', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  await page.fill('#first-name', 'Test');
  await page.fill('#last-name', 'User');
  await page.fill('#postal-code', '1000');
  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  const completeHeader = page.locator('.complete-header');
  await expect(completeHeader).toContainText('thank you for your order', { ignoreCase: true });

});
