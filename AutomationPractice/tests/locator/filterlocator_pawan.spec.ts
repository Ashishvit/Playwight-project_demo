import { test, expect } from '@playwright/test';

/* ======================================================
    Playwright Locator Filters

    1. Verify "Add to cart" for Product 2
    2. Count items not having "Out of stock"
    3. Find items with "In stock"
    4. Verify elements using data-testid
    5. Count all elements with test ids
    6. Find "Say goodbye" button for John
    7. Find "Say hello" button for Mary
    8. Find "Subscribe" buttons using multiple conditions
    9. Find "details" buttons for done tasks
    10. Verify stock status counts
======================================================*/


// Runs before each test
test.beforeEach(async ({ page }) => {
    await page.goto('https://sdetqa.vercel.app/filters_practice.html');
});


// ❌ DO NOT use page/context inside afterAll()
// Playwright automatically closes the page after each test.


// 1. Filter using hasText
test('1.Verify "Add to cart" for Product 2', async ({ page }) => {

    const productButton2 = page
        .getByRole('listitem')
        .filter({ hasText: 'Product 2' })
        .getByRole('button', { name: 'Add to cart' });

    await expect(productButton2).toBeVisible();

    // await productButton2.click();
});


// 2. Filter using hasNotText
test('2.Count items not having "Out of stock" (in Stock)', async ({ page }) => {

    const inStockItems = page
        .locator('.card')
        .nth(1)
        .getByRole('listitem')
        .filter({ hasNotText: 'Out of stock' });

    await expect(inStockItems).toHaveCount(3);
});


// 3. Find items with "In stock"
test('3.Find items with "In stock"', async ({ page }) => {

    const inStockItems = page
        .getByRole('listitem')
        .filter({ hasText: 'In stock' });

    await expect(inStockItems).toHaveCount(3);
});


// 4. getByTestId()
test('4.Verify elements using data-testid', async ({ page }) => {

    const apple = page.getByTestId('apple');
    const banana = page.getByTestId('banana');
    const orange = page.getByTestId('orange');

    await expect(apple).toBeVisible();
    await expect(banana).toBeVisible();
    await expect(orange).toBeVisible();

    await expect(apple).toContainText('apple');
    await expect(banana).toContainText('banana');
    await expect(orange).toContainText('orange');
});


// 5. first(), last(), nth()
test('5.Count all elements with test ids', async ({ page }) => {

    const testIdElements = page.locator('[data-testid]');

    const firstElement = testIdElements.first();
    const lastElement = testIdElements.last();
    const fourthElement = testIdElements.nth(3);

    console.log(
        'Fruits......',
        await firstElement.innerText(),
        await lastElement.innerText(),
        await fourthElement.innerText()
    );

    await expect(testIdElements).toHaveCount(5);
});


// 6. Chaining filters - John
test('6.Find "Say goodbye" button for John', async ({ page }) => {

    const goodbyeButton = page
        .getByRole('listitem')
        .filter({ hasText: 'John' })
        .getByRole('button', { name: 'Say goodbye' });

    await expect(goodbyeButton).toBeVisible();
    await expect(goodbyeButton).toHaveText('Say goodbye');
});


// 7. Chaining filters - Mary
test('7.Find "Say hello" button for Mary', async ({ page }) => {

    const helloButton = page
        .getByRole('listitem')
        .filter({ hasText: 'Mary' })
        .getByRole('button', { name: 'Say hello' });

    await expect(helloButton).toBeVisible();
    await expect(helloButton).toHaveText('Say hello');
});


// 8. Multiple conditions using .and()
test('8.Find "Subscribe" buttons using multiple conditions', async ({ page }) => {

    const subscribeButtons = page
        .getByRole('button')
        .and(
            page.getByTitle('Subscribe', { exact: true })
        );

    console.log(
        'Subscribe buttons count:',
        await subscribeButtons.count()
    );

    await expect(subscribeButtons).toHaveCount(2);
    await expect(subscribeButtons.first()).toBeVisible();
    await expect(subscribeButtons.last()).toBeVisible();
});


// 9. Find details buttons for done tasks
test('9.Find "details" buttons for done tasks', async ({ page }) => {

    const doneTaskDetails = page
        .getByRole('listitem')
        .filter({ hasText: 'done' })
        .getByRole('button', { name: 'details' });

    await expect(doneTaskDetails).toHaveCount(2);
});


// 10. Verify stock status counts
test('10.Verify stock status counts', async ({ page }) => {

    const inStock = page
        .getByRole('listitem')
        .filter({ hasText: 'In stock' });

    const outOfStock = page
        .getByRole('listitem')
        .filter({ hasText: 'Out of stock' });

    await expect(inStock).toHaveCount(3);
    await expect(outOfStock).toHaveCount(2);
});





//const abcd = page.getByRole('listitem').filter({has: page.getByRole('button', {name: 'add to cart'})});
//abcd.getByRole('button', {name: 'add to cart'});