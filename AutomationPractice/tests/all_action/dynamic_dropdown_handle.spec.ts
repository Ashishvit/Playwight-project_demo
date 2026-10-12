import { test, expect, Locator } from '@playwright/test';

/**
 * OrangeHRM CUSTOM DROPDOWN
 * --------------------------------------------
 * DOM used by this example:
 *
 * <div class="oxd-select-text">-- Select --</div>
 * <div role="listbox">
 *   <div role="option"><span>-- Select --</span></div>
 *   <div role="option"><span>ffe-Aarav</span></div>
 *   <div role="option"><span>Freelance</span></div>
 *   ...
 * </div>
 *
 * IMPORTANT:
 * This is NOT a native <select>.
 * Therefore use:
 *
 *   getByRole('listbox')
 *   getByRole('option')
 *
 * Do NOT use locator('option') for this custom dropdown.
 */

test('Custom dropdown - complete operations using role=option', async ({ page }) => {

  // ---------------------------------------------------------
  // 1. OPEN YOUR APPLICATION
  // ---------------------------------------------------------
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Go to PIM -> Employee List if required.
  await page.getByText('PIM', { exact: true }).click();
  await page.getByRole('link', { name: 'Employee List' }).click();

  // ---------------------------------------------------------
  // 2. FIND THE CUSTOM DROPDOWN
  // ---------------------------------------------------------
  // Example: Employment Status dropdown from the screenshot.
  //
  // If your page has multiple .oxd-select-text elements,
  // use the correct nth() or a parent/label-based locator.
  const dropdown: Locator = page.locator('.oxd-select-text').nth(2);

  // Verify dropdown is present.
  await expect(dropdown).toBeVisible();

  // Read currently displayed value.
  console.log('Initial value:', await dropdown.innerText());

  // ---------------------------------------------------------
  // 3. OPEN DROPDOWN
  // ---------------------------------------------------------
  await dropdown.click();

  // ---------------------------------------------------------
  // 4. FIND THE LISTBOX
  // ---------------------------------------------------------
  const listbox = page.getByRole('listbox');

  // Verify listbox is visible after opening.
  await expect(listbox).toBeVisible();

  // ---------------------------------------------------------
  // 5. FIND ALL OPTIONS
  // ---------------------------------------------------------
  // This is the MAIN locator for this custom dropdown.
  const options = listbox.getByRole('option');

  // XPath equivalent:
  // //div[@role='listbox']//div[@role='option']

  // CSS equivalent:
  // [role='listbox'] [role='option']

  // ---------------------------------------------------------
  // 6. COUNT ALL OPTIONS
  // ---------------------------------------------------------
  const optionCount = await options.count();

  console.log('Total options:', optionCount);

  // Verify that at least one option exists.
  expect(optionCount).toBeGreaterThan(0);

  // ---------------------------------------------------------
  // 7. GET TEXT OF ALL OPTIONS
  // ---------------------------------------------------------
  const allTexts = await options.allTextContents();

  console.log('All options:', allTexts);

  // Clean spaces/new lines.
  const cleanTexts = allTexts.map(text => text.trim());

  console.log('Clean option texts:', cleanTexts);

  // ---------------------------------------------------------
  // 8. TRAVERSE EVERY OPTION USING nth()
  // ---------------------------------------------------------
  for (let i = 0; i < optionCount; i++) {

    const option = options.nth(i);

    // Read current option text.
    const text = (await option.innerText()).trim();

    console.log(`Option ${i}: ${text}`);

    // Verify every option is visible.
    await expect(option).toBeVisible();
  }

  // ---------------------------------------------------------
  // 9. VERIFY A PARTICULAR OPTION EXISTS
  // ---------------------------------------------------------
  const freelanceOption = page.getByRole('option', {
    name: 'Freelance',
    exact: true
  });

  // count() = 1 means option exists exactly once.
  expect(await freelanceOption.count()).toBe(1);

  // Verify it is visible.
  await expect(freelanceOption).toBeVisible();

  // ---------------------------------------------------------
  // 10. VERIFY OPTION TEXT
  // ---------------------------------------------------------
  await expect(freelanceOption).toHaveText('Freelance');

  // ---------------------------------------------------------
  // 11. VERIFY OPTION BY HAS-TEXT
  // ---------------------------------------------------------
  await expect(
    options.filter({ hasText: 'Freelance' })
  ).toBeVisible();

  // ---------------------------------------------------------
  // 12. SELECT / CLICK A PARTICULAR OPTION
  // ---------------------------------------------------------
  await freelanceOption.click();

  // ---------------------------------------------------------
  // 13. VERIFY DROPDOWN CLOSED
  // ---------------------------------------------------------
  await expect(listbox).toBeHidden();

  // ---------------------------------------------------------
  // 14. VERIFY SELECTED VALUE
  // ---------------------------------------------------------
  await expect(dropdown).toContainText('Freelance');

  // Exact text can also be checked if the UI contains
  // only the selected value.
  await expect(dropdown).toHaveText('Freelance');

  // ---------------------------------------------------------
  // 15. OPEN DROPDOWN AGAIN
  // ---------------------------------------------------------
  await dropdown.click();

  // Re-create/use the role locator after opening.
  const optionsAgain = page.getByRole('listbox').getByRole('option');

  // ---------------------------------------------------------
  // 16. SELECT OPTION USING nth()
  // ---------------------------------------------------------
  // Example: select the 3rd option (index 2).
  //
  // IMPORTANT:
  // nth(2) = third option because index starts from 0.
  const thirdOption = optionsAgain.nth(2);

  console.log(
    'Third option:',
    (await thirdOption.innerText()).trim()
  );

  // Click it.
  await thirdOption.click();

  // ---------------------------------------------------------
  // 17. VERIFY SELECTED OPTION BY TEXT
  // ---------------------------------------------------------
  const selectedAfterNth = (await thirdOption.innerText()).trim();

  console.log('Selected by nth:', selectedAfterNth);

  await expect(dropdown).toContainText(selectedAfterNth);

  // ---------------------------------------------------------
  // 18. FIRST OPTION
  // ---------------------------------------------------------
  await dropdown.click();

  const currentOptions = page.getByRole('listbox').getByRole('option');

  const firstOption = currentOptions.first();

  console.log(
    'First option:',
    (await firstOption.innerText()).trim()
  );

  // ---------------------------------------------------------
  // 19. LAST OPTION
  // ---------------------------------------------------------
  const lastOption = currentOptions.last();

  console.log(
    'Last option:',
    (await lastOption.innerText()).trim()
  );

  // ---------------------------------------------------------
  // 20. VERIFY FIRST AND LAST OPTION
  // ---------------------------------------------------------
  await expect(firstOption).toBeVisible();
  await expect(lastOption).toBeVisible();

  // ---------------------------------------------------------
  // 21. SELECT LAST OPTION
  // ---------------------------------------------------------
  await lastOption.click();

  const lastText = (await lastOption.innerText()).trim();

  await expect(dropdown).toContainText(lastText);

  // ---------------------------------------------------------
  // 22. VERIFY OPTION COUNT
  // ---------------------------------------------------------
  await dropdown.click();

  const finalOptions = page.getByRole('listbox').getByRole('option');

  const finalCount = await finalOptions.count();

  console.log('Final option count:', finalCount);

  expect(finalCount).toBe(optionCount);

  // ---------------------------------------------------------
  // 23. VERIFY EXPECTED OPTIONS
  // ---------------------------------------------------------
  // Replace this array with the exact options expected
  // in your application/environment.
  const expectedOptions = [
    '-- Select --',
    'ffe-Aarav',
    'Freelance',
    'Full-Time Contract',
    'Full-Time Permanent',
    'Full-Time Probation'
  ];

  // Compare only if your environment contains this exact list.
  // If your dropdown has more options, update expectedOptions.
  const actualOptions = (await finalOptions.allTextContents())
    .map(text => text.trim());

  console.log('Actual:', actualOptions);
  console.log('Expected:', expectedOptions);

  expect(actualOptions).toEqual(expectedOptions);

  // ---------------------------------------------------------
  // 24. VERIFY EACH EXPECTED OPTION INDIVIDUALLY
  // ---------------------------------------------------------
  for (const expected of expectedOptions) {

    await expect(
      page.getByRole('option', {
        name: expected,
        exact: true
      })
    ).toBeVisible();
  }

  // ---------------------------------------------------------
  // 25. VERIFY OPTION DOES NOT EXIST
  // ---------------------------------------------------------
  const invalidOption = page.getByRole('option', {
    name: 'ABC_NOT_EXIST',
    exact: true
  });

  expect(await invalidOption.count()).toBe(0);

  // ---------------------------------------------------------
  // 26. SELECT EVERY OPTION ONE BY ONE
  // ---------------------------------------------------------
  //
  // Important:
  // Clicking an option closes the dropdown.
  // Therefore open it again for every iteration.
  //
  // We already stored the option names, so we don't depend
  // on the DOM while the dropdown is closed.
  const optionNames = actualOptions;

  // Close current dropdown first by selecting the first option.
  await finalOptions.first().click();

  for (const optionName of optionNames) {

    // Open dropdown again.
    await dropdown.click();

    // Find exact option by role.
    const option = page.getByRole('option', {
      name: optionName,
      exact: true
    });

    // Verify option is visible before clicking.
    await expect(option).toBeVisible();

    console.log('Selecting every option:', optionName);

    // Click current option.
    await option.click();

    // Verify selected value.
    await expect(dropdown).toContainText(optionName);
  }

  // ---------------------------------------------------------
  // 27. REOPEN AND PRINT INDEX + TEXT
  // ---------------------------------------------------------
  await dropdown.click();

  const traverseOptions = page
    .getByRole('listbox')
    .getByRole('option');

  for (let i = 0; i < await traverseOptions.count(); i++) {

    const option = traverseOptions.nth(i);
    const text = (await option.innerText()).trim();

    console.log({
      index: i,
      text: text
    });
  }

  // ---------------------------------------------------------
  // 28. SELECT BY EXACT TEXT
  // ---------------------------------------------------------
  await page.getByRole('option', {
    name: 'Full-Time Contract',
    exact: true
  }).click();

  await expect(dropdown).toContainText('Full-Time Contract');

  // ---------------------------------------------------------
  // 29. OPEN AND USE FILTER()
  // ---------------------------------------------------------
  await dropdown.click();

  const filteredOption = page
    .getByRole('listbox')
    .getByRole('option')
    .filter({ hasText: 'Permanent' });

  await expect(filteredOption).toBeVisible();

  console.log(
    'Filtered option:',
    await filteredOption.allTextContents()
  );

  // ---------------------------------------------------------
  // 30. SELECT FILTERED OPTION
  // ---------------------------------------------------------
  await filteredOption.click();

  await expect(dropdown).toContainText('Full-Time Permanent');

  // ---------------------------------------------------------
  // 31. FINAL VERIFICATION
  // ---------------------------------------------------------
  console.log(
    'Final selected value:',
    await dropdown.innerText()
  );
});


/**
 * ============================================================
 * QUICK REFERENCE - CUSTOM DROPDOWN
 * ============================================================
 *
 * FIND DROPDOWN:
 * const dropdown = page.locator('.oxd-select-text').nth(2);
 *
 * OPEN:
 * await dropdown.click();
 *
 * LISTBOX:
 * const listbox = page.getByRole('listbox');
 *
 * ALL OPTIONS:
 * const options = listbox.getByRole('option');
 *
 * COUNT:
 * await options.count();
 *
 * ALL TEXT:
 * await options.allTextContents();
 *
 * INDEX:
 * options.nth(0);
 * options.nth(1);
 * options.nth(2);
 *
 * FIRST:
 * options.first();
 *
 * LAST:
 * options.last();
 *
 * PARTICULAR OPTION:
 * page.getByRole('option', {
 *   name: 'Freelance',
 *   exact: true
 * });
 *
 * CLICK:
 * await option.click();
 *
 * VERIFY:
 * await expect(dropdown).toContainText('Freelance');
 *
 * VERIFY OPTION EXISTS:
 * expect(await option.count()).toBe(1);
 *
 * VERIFY ALL:
 * await expect(options).toHaveCount(6);
 *
 * TRAVERSE:
 * for (let i = 0; i < await options.count(); i++) {
 *   console.log(await options.nth(i).innerText());
 * }
 *
 * XPATH EQUIVALENT:
 * //div[@role='listbox']//div[@role='option']
 *
 * CSS EQUIVALENT:
 * [role='listbox'] [role='option']
 *
 * IMPORTANT:
 * This custom dropdown uses:
 *
 * <div role="option">
 *
 * NOT:
 *
 * <option>
 *
 * Therefore:
 *
 * page.getByRole('option')       // CORRECT
 * page.locator('option')        // WRONG for this DOM
 */
