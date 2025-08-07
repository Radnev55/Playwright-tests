const { test, expect} = require('@playwright/test');

test('Fill form and check two-way data binding', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/angularpractice/');

    const nameInput = page.locator('form input[name="name"]');
    await nameInput.fill('Marto Test');

    const binding = page.locator('h4 input');
    await expect(binding).toHaveValue('Marto Test');

    await page.locator('input[name="email"]').fill('test@example.com');

    await page.locator('#exampleInputPassword1').fill('test123');

    await page.locator('#exampleCheck1').check();

    await page.locator('select.form-control').selectOption('Male');

    await page.locator('input[type="radio"][value="option2"]').check();

    await page.locator('input[type="submit"]').click();

    const success = page.locator('.alert-success');
    await expect(success).toBeVisible(); 




});