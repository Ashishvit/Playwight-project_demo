
import { test, expect } from '@playwright/test';

const pageUrl = 'https://sdetqa.vercel.app/autoplay';

test.describe('Data Entry Form Validation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl);
    //await expect(page.getByText('AutoPlay')).toBeVisible();
    //await expect(page.locator('span.logo')).toBeVisible();
  });

  test('1. Page load validation', async ({ page }) => {
    // Verify the page URL
    await expect(page).toHaveURL(pageUrl);

    // Verify the heading is visible
    await expect(page.getByText('AutoPlay')).toBeVisible();
  });

  test('2. Input fields validation', async ({ page }) => {
    const nameField = page.getByLabel('Full name');
    const emailField = page.getByLabel('Email');
    const phoneField = page.getByLabel('Phone');
    const addressField = page.getByLabel('Address');

    // Full name validation
    await expect(nameField).toBeVisible();
    await expect(nameField).toBeEnabled();
    await expect(nameField).toHaveAttribute('maxlength', '15');

    await nameField.fill('John Canedy');
    await expect(nameField).toHaveValue('John Canedy');

    // Email validation
    await expect(emailField).toBeVisible();
    await emailField.fill('tester@example.com');
    await expect(emailField).toHaveValue('tester@example.com');

    // Phone validation
    await expect(phoneField).toBeVisible();
    await phoneField.fill('+91 1234567898');
    await expect(phoneField).toHaveValue('+91 1234567898');

    // Address validation
    await expect(addressField).toBeVisible();
    await addressField.fill('123 Xyz Lane\nDelhi, India');
    await expect(addressField).toHaveValue( '123 Xyz Lane\nDelhi, India' );
 });

 test('Google autocomplete - select second suggestion', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Enter search text
  const searchBox = page.getByRole('combobox', { name: /search/i });
  await searchBox.fill('cricket');

  // Wait for Google autocomplete suggestions
  const suggestions = page.locator('ul[role="listbox"] li');

  await expect(suggestions.first()).toBeVisible();

  // Click the second suggestion (index 1)
  await suggestions.nth(1).click();

  // Verify navigation/search results
  await expect(page).toHaveURL(/search/);
});

});
