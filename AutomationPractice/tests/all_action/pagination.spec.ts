import { test, expect } from '@playwright/test';

test('Dynamic pagination - read all pages', async ({ page }) => {

  await page.goto('https://your-website.com');

  // Start from first page
  await page.getByRole('button', { name: 'First' }).click();

  while (true) {

    // 1. Get all rows from current page
    const rows = page.locator('#example tbody tr');

    // 2. Read all data from current page
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {

      const row = rows.nth(i);

      // Gets complete data of one row
      const rowData = await row.innerText();

      console.log(rowData);
    }

    // 3. Locate Next button
    const nextButton = page.getByRole('button', {
      name: 'Next'
    });

    // 4. Check whether Next button is enabled/disabled
    const isDisabled = await nextButton.isDisabled();

    // 5. If Next is disabled, we reached last page
    if (isDisabled) {

      console.log('Reached last page');

      break;
    }

    // 6. Next is enabled → click it
    console.log('Next page available');

    await nextButton.click();

    // 7. Loop starts again
    //    → read rows
    //    → check Next
    //    → click Next
    //    → repeat
  }

});