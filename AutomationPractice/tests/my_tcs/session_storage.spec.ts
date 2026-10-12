
import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Verify Facebook Session Storage', async ({ page }) => {

  // Open Facebook
  await page.goto('https://www.facebook.com/');

  // Read all Session Storage data
  const storage = await page.evaluate(() => ({
    ...sessionStorage
  }));

  // Print the data
  console.log(storage);

  // Verify that storage is an object
  expect(storage).toBeDefined();
});


test('Save Session Storage', async ({ page }) => {

  await page.goto('https://www.facebook.com/');

  const storage = await page.evaluate(() => ({
    ...sessionStorage
  }));

  fs.writeFileSync('storage.json', JSON.stringify(storage, null, 2));

});