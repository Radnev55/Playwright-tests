const {test, expect} = require('@playwright/test');

test('Add Blackberry to cart and verify', async ({page}) => {

await page.goto('/angularpractice/');

await page.click('a[href*="shop"]');
await expect(page).toHaveURL(/.*shop/);

const product = page.locator('.card.h-100');

const count = await product.count();
for (let i = 0; i < count; i++) {

const productName = await product.nth(i).locator('h4 a').textContent();

if(productName.includes('Blackberry')) {

    await product.nth(i).locator('text=Add').click();
    break;

await page.click('a.nav-link.btn.btn-primary');
const carItem = page.locator('h4.media-heading');
await expect(carItem).toCointainText('Blackberry');




}

}



});
