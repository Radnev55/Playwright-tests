const { test, expect } = require('@playwright/test');

test('Complete order and verify success message', async ({ page }) => {
  // Отиваме на сайта
  await page.goto('https://rahulshettyacademy.com/angularpractice/');

  // Отиваме в секцията Shop
  await page.locator('text=Shop').click();

  // Добавяме продукта Blackberry в количката
  // Използваме точни селектори, за да избегнем конфликти
  const productCard = page.locator('.card').filter({ hasText: 'Blackberry' });
  await expect(productCard).toBeVisible({ timeout: 10000 });
  await productCard.locator('text=Add').click();

  // Отиваме на количката (Checkout)
  await page.locator('a.nav-link.btn.btn-primary').click();

  // Натискаме бутона Checkout
  await page.locator('text=Checkout').click();

  // Въвеждаме държавата, за да се появят предложенията
  await page.fill('#country', 'Bul');
  await page.waitForTimeout(500); // малко изчакване
  await page.type('#country', 'garia'); // тригерира събития за autocomplete

  // Изчакваме предложението Bulgaria да се появи и го избираме
  const suggestion = page.locator('.suggestions li', { hasText: 'Bulgaria' });
  await suggestion.waitFor({ state: 'visible', timeout: 10000 });
  await suggestion.click();

  // Отметка за Terms and Conditions - използваме label за да избегнем проблеми с кликане
  await page.locator('label[for="checkbox2"]').click();

  // Финализираме поръчката
  await page.locator('input[type="submit"]').click();

  // Проверяваме, че имаме съобщение за успех
  const successMessage = page.locator('.alert-success');
  await expect(successMessage).toContainText('Success', { timeout: 10000 });
});
