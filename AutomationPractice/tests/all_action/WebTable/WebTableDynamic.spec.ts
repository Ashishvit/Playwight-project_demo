import { test, expect } from '@playwright/test';

test('Dynamic Web Table - All Operations', async ({ page }) => {

  await page.goto('https://example.com');


  // =========================================================
  // TABLE LOCATOR
  // =========================================================

  const table = page.locator('#processTable');


  // =========================================================
  // 1. VERIFY TABLE IS VISIBLE
  // =========================================================

  await expect(table).toBeVisible();


  // =========================================================
  // 2. GET ALL ROWS
  // =========================================================

  const rows = table.locator('tbody tr');

  const rowCount = await rows.count();

  console.log('Total Rows:', rowCount);


  // =========================================================
  // 3. GET ALL COLUMNS OF FIRST ROW
  // =========================================================

  const firstRowCells = rows.nth(0).locator('td');

  const columnCount = await firstRowCells.count();

  console.log('Columns:', columnCount);


  // =========================================================
  // 4. PRINT ALL ROWS
  // =========================================================

  for (const row of await rows.all()) {
    console.log('Row:', await row.innerText());
  }


  // =========================================================
  // 5. PRINT ALL TABLE DATA
  // =========================================================

  for (let i = 0; i < rowCount; i++) {

    const row = rows.nth(i);

    const cells = row.locator('td');

    const cellCount = await cells.count();

    for (let j = 0; j < cellCount; j++) {

      console.log(
        `Row ${i + 1}, Column ${j + 1}:`,
        await cells.nth(j).innerText()
      );
    }
  }


  // =========================================================
  // 6. GET FIRST ROW
  // =========================================================

  console.log(
    'First Row:',
    await rows.first().innerText()
  );


  // =========================================================
  // 7. GET LAST ROW
  // =========================================================

  console.log(
    'Last Row:',
    await rows.last().innerText()
  );


  // =========================================================
  // 8. GET FIRST COLUMN DATA
  // =========================================================

  for (const row of await rows.all()) {

    const processName =
      await row.locator('td').nth(0).innerText();

    console.log('Process:', processName);
  }


  // =========================================================
  // 9. GET SPECIFIC CELL
  // =========================================================

  const cell = rows.nth(1).locator('td').nth(2);

  console.log(
    'Row 2, Column 3:',
    await cell.innerText()
  );


  // =========================================================
  // 10. FIND ROW USING TEXT
  // =========================================================

  const chromeRow = rows.filter({
    hasText: 'Chrome'
  });

  console.log(
    'Chrome Row:',
    await chromeRow.innerText()
  );


  // =========================================================
  // 11. GET DATA FROM FOUND ROW
  // =========================================================

  const chromeCPU =
    await chromeRow.locator('td').nth(1).innerText();

  console.log('Chrome CPU:', chromeCPU);


  // =========================================================
  // 12. GET MEMORY OF CHROME
  // =========================================================

  const chromeMemory =
    await chromeRow.locator('td').nth(2).innerText();

  console.log('Chrome Memory:', chromeMemory);


  // =========================================================
  // 13. VERIFY CHROME EXISTS
  // =========================================================

  await expect(
    rows.filter({ hasText: 'Chrome' })
  ).toHaveCount(1);


  // =========================================================
  // 14. FIND ROW USING MULTIPLE VALUES
  // =========================================================

  const runningChrome = rows.filter({
    hasText: 'Chrome'
  }).filter({
    hasText: 'Running'
  });

  console.log(
    'Running Chrome:',
    await runningChrome.innerText()
  );


  // =========================================================
  // 15. MATCH MEMORY USING REGEX
  // =========================================================

  const mbRow = rows.filter({
    hasText: /MB/i
  });

  console.log(
    'Rows containing MB:',
    await mbRow.allTextContents()
  );


  // =========================================================
  // 16. EXACT TEXT MATCH
  // =========================================================

  const firefoxRow = rows.filter({
    hasText: /^Firefox/
  });

  console.log(
    'Firefox:',
    await firefoxRow.innerText()
  );


  // =========================================================
  // 17. GET BUTTON FROM DYNAMIC ROW
  // =========================================================

  const edgeRow = rows.filter({
    hasText: 'Edge'
  });

  const edgeButton =
    edgeRow.locator('button');

  console.log(
    'Edge Button:',
    await edgeButton.innerText()
  );


  // =========================================================
  // 18. CLICK BUTTON IN SPECIFIC ROW
  // =========================================================

  // Example:
  // await edgeRow.locator('button').click();


  // =========================================================
  // 19. CLICK ACTION BASED ON ROW DATA
  // =========================================================

  const firefox = rows.filter({
    hasText: 'Firefox'
  });

  await firefox.locator('button').click();


  // =========================================================
  // 20. LOOP THROUGH ROWS AND PERFORM CONDITION
  // =========================================================

  for (const row of await rows.all()) {

    const process =
      await row.locator('td').nth(0).innerText();

    const status =
      await row.locator('td').nth(3).innerText();

    if (status === 'Running') {

      console.log(
        `${process} is Running`
      );

    } else {

      console.log(
        `${process} is Stopped`
      );
    }
  }


  // =========================================================
  // 21. FIND ROW AND VALIDATE COLUMN VALUES
  // =========================================================

  const chrome = rows.filter({
    hasText: 'Chrome'
  });

  await expect(
    chrome.locator('td').nth(0)
  ).toHaveText('Chrome');

  await expect(
    chrome.locator('td').nth(3)
  ).toHaveText('Running');


  // =========================================================
  // 22. COUNT ROWS CONTAINING RUNNING
  // =========================================================

  const runningRows = rows.filter({
    hasText: 'Running'
  });

  console.log(
    'Running Rows:',
    await runningRows.count()
  );


  // =========================================================
  // 23. PRINT ONLY RUNNING PROCESS NAMES
  // =========================================================

  for (const row of await runningRows.all()) {

    console.log(
      'Running Process:',
      await row.locator('td').nth(0).innerText()
    );
  }


  // =========================================================
  // 24. CHECK IF PARTICULAR PROCESS EXISTS
  // =========================================================

  const processExists = await rows
    .filter({ hasText: 'Chrome' })
    .count() > 0;

  console.log(
    'Chrome Exists:',
    processExists
  );


  // =========================================================
  // 25. FIND ROW BY COLUMN VALUE
  // =========================================================

  for (const row of await rows.all()) {

    const memory =
      await row.locator('td').nth(2).innerText();

    if (memory === '350 MB') {

      console.log(
        'Found Memory 350 MB:',
        await row.innerText()
      );
    }
  }


  // =========================================================
  // 26. FIND HIGH MEMORY PROCESS
  // =========================================================

  for (const row of await rows.all()) {

    const process =
      await row.locator('td').nth(0).innerText();

    const memory =
      await row.locator('td').nth(2).innerText();

    const memoryValue =
      parseInt(memory);

    if (memoryValue > 300) {

      console.log(
        `${process} uses more than 300 MB`
      );
    }
  }


  // =========================================================
  // 27. PRINT ROW INDEX
  // =========================================================

  for (let i = 0; i < rowCount; i++) {

    console.log(
      'Row Index:',
      i,
      'Data:',
      await rows.nth(i).innerText()
    );
  }


  // =========================================================
  // 28. PRINT COLUMN INDEX
  // =========================================================

  const row = rows.nth(0);

  const cells = row.locator('td');

  for (let j = 0; j < await cells.count(); j++) {

    console.log(
      'Column Index:',
      j,
      'Value:',
      await cells.nth(j).innerText()
    );
  }


  // =========================================================
  // 29. GET ALL TEXT FROM TABLE
  // =========================================================

  console.log(
    await rows.allTextContents()
  );


  // =========================================================
  // 30. GET TABLE HTML
  // =========================================================

  console.log(
    await table.innerHTML()
  );

});