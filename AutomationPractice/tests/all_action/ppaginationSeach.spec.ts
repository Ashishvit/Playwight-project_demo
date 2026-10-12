import { test, expect } from '@playwright/test';

test('Search value in all pagination pages', async ({ page }) => {

  await page.goto('https://your-website.com');

  const searchValue = 'QA Engineer';

  const matchingRows: string[] = [];

  while (true) {

    // 1. Get all rows from current page
    const rows = page.locator('#example tbody tr');

    const rowCount = await rows.count();

    console.log(`Current page has ${rowCount} rows`);

    // 2. Read and search every row
    for (let i = 0; i < rowCount; i++) {

      const row = rows.nth(i);

      const rowText = await row.innerText();

      console.log(`Row ${i + 1}: ${rowText}`);

      if (rowText.includes(searchValue)) {

        console.log(`FOUND: ${rowText}`);

        matchingRows.push(rowText);
      }
    }

    // 3. Find Next button
    const nextButton = page.getByRole('button', {
      name: 'Next'
    });

    // 4. Check whether Next button exists
    if (await nextButton.count() === 0) {

      console.log('Next button not available.');
      break;
    }

    // 5. Check whether this is the last page
    if (await nextButton.isDisabled()) {

      console.log('Last page reached.');
      break;
    }

    // 6. Click Next
    console.log('Moving to next page...');

    await nextButton.click();

    // 7. Wait for new page/table data
    await page.waitForTimeout(500);
  }

  // 8. Final result
  console.log('==============================');

  console.log(`Total matching records: ${matchingRows.length}`);

  if (matchingRows.length > 0) {

    for (const record of matchingRows) {
      console.log('MATCH:', record);
    }

  } else {

    console.log(`"${searchValue}" was not found.`);
  }

  console.log('==============================');

  // 9. Assertion
  expect(matchingRows.length).toBeGreaterThan(0);
});