
import { test, expect } from '@playwright/test';
import fs from 'fs';

const appURL = 'https://sdetqa.vercel.app/login_app';
const authFile = 'playwright/.auth/user.json';

test('Login and save cookies', async ({ page }) => {

  fs.mkdirSync('playwright/.auth', { recursive: true });

  await page.goto(appURL);

   await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByLabel('🍪 Cookie').check();
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Dashboard Welcome', { exact: true })).toBeVisible()


  // Save authentication state
  const authFile = 'cookies_file/user.json';
  await page.context().storageState({ path: authFile });
});

test('Login using saved cookies', async ({ page }) => {

  // Open application without entering credentials
  await page.goto(appURL);

  // Verify dashboard is visible
  await expect( page.getByText('Dashboard Welcome', { exact: true })).toBeVisible();

});



