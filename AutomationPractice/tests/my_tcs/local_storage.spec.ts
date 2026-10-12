
import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Save Google Local Storage to JSON', async ({ page }) => {

  // Open Google
  await page.goto('https://www.google.com');

  // Read Local Storage
  const storage = await page.evaluate(() => ({
    ...localStorage
  }));
  console.log(storage);

  // Save data into a JSON file
  fs.writeFileSync(
    'localStorage.json',
    JSON.stringify(storage, null, 2)
  );

  // Display data
  console.log(storage);

  expect(storage).toBeTruthy();
});


test('Verify Local and Session Storage', async ({ page }) => {

  // 1. Open Amazon
  await page.goto('https://www.amazon.com');

  // 2. Set Local Storage
  await page.evaluate(() => {
    localStorage.setItem('language', 'English');
    localStorage.setItem('theme', 'dark');
  });

  // 3. Set Session Storage
  await page.evaluate(() => {
    sessionStorage.setItem('searchItem', 'Laptop');
    sessionStorage.setItem('category', 'Electronics');
  });

  // 4. Read both storages
  const storage = await page.evaluate(() => ({
    localStorage: { ...localStorage },
    sessionStorage: { ...sessionStorage }
  }));

  // 5. Save data into JSON file
  fs.writeFileSync(
    'storage.json',
    JSON.stringify(storage, null, 2)
  );

  // 6. Verify the values
  expect(storage.localStorage.language).toBe('English');
  expect(storage.sessionStorage.searchItem).toBe('Laptop');

  console.log(storage);
});




test('Verify Local and Session Storage using getiem setItem', async ({ page }) => {

  await page.goto('https://www.amazon.com');

  // 1. Set Local Storage
  await page.evaluate(() => {
    localStorage.setItem('language', 'English');
    localStorage.setItem('theme', 'dark');
  });

  // 2. Set Session Storage
  await page.evaluate(() => {
    sessionStorage.setItem('searchItem', 'Laptop');
    sessionStorage.setItem('category', 'Electronics');
  });

  // 3. Read Local Storage using getItem()
  const localData = await page.evaluate(() => ({
    language: localStorage.getItem('language'),
    theme: localStorage.getItem('theme')
  }));

  // 4. Read Session Storage using getItem()
  const sessionData = await page.evaluate(() => ({
    searchItem: sessionStorage.getItem('searchItem'),
    category: sessionStorage.getItem('category')
  }));

  // 5. Save both into JSON file
  const storage = {
    localStorage: localData,
    sessionStorage: sessionData
  };

  fs.writeFileSync('storage.json', JSON.stringify(storage, null, 2));

  // 6. Verify values
  expect(localData.language).toBe('English');
  expect(localData.theme).toBe('dark');
  expect(sessionData.searchItem).toBe('Laptop');
  expect(sessionData.category).toBe('Electronics');

  console.log(storage);
});
