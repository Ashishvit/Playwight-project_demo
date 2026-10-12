import { test, expect } from '@playwright/test';

test('OrangeHRM Login and Create Buzz Post', async ({ page }) => {

  // Open OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Login
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/dashboard/);

  

});