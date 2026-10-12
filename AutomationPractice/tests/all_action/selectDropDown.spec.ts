

import { test, expect } from '@playwright/test';

test('Complete Select Dropdown Operations', async ({ page }) => {

  // ============================================================
  // DOM USED FOR THIS EXAMPLE
  // ============================================================
  /*
    <label for="country">Country</label>

    <select id="country" name="country">
      <option value="">Select Country</option>
      <option value="india">India</option>
      <option value="usa">USA</option>
      <option value="uk">UK</option>
      <option value="canada">Canada</option>
      <option value="australia">Australia</option>
    </select>
  */

  await page.goto('https://example.com');

  // ============================================================
  // 1. LOCATE DROPDOWN
  // ============================================================

  // By ID
  const dropdown = page.locator('#country');

  // By label
  const dropdownByLabel = page.getByLabel('Country');

  // By CSS
  const dropdownByCSS = page.locator('select[name="country"]');

  // By XPath
  const dropdownByXPath = page.locator('//select[@id="country"]');


  // ============================================================
  // 2. VERIFY DROPDOWN IS VISIBLE
  // ============================================================

  await expect(dropdown).toBeVisible();


  // ============================================================
  // 3. VERIFY DROPDOWN IS ENABLED
  // ============================================================

  await expect(dropdown).toBeEnabled();


  // ============================================================
  // 4. VERIFY DROPDOWN IS DISABLED
  // ============================================================

  // Use this only if the dropdown is expected to be disabled.
  // await expect(dropdown).toBeDisabled();


  // ============================================================
  // 5. GET ALL OPTIONS
  // ============================================================

  const options = dropdown.locator('option');

  // Count all options
  const count = await options.count();

  console.log('Total options:', count);


  // ============================================================
  // 6. GET TEXT OF EVERY OPTION
  // ============================================================

  for (let i = 0; i < count; i++) {

    const text = await options.nth(i).innerText();

    console.log(`Option ${i}:`, text);
  }


  // ============================================================
  // 7. GET TEXT USING ALL INNER TEXT
  // ============================================================

  const allText = await options.allInnerTexts();

  console.log('All option text:', allText);


  // ============================================================
  // 8. GET OPTION VALUE
  // ============================================================

  for (let i = 0; i < count; i++) {

    const value = await options.nth(i).getAttribute('value');

    console.log(`Option ${i} value:`, value);
  }


  // ============================================================
  // 9. VERIFY PARTICULAR OPTION EXISTS
  // ============================================================

  await expect(dropdown.locator('option', { hasText: 'India' }))
    .toBeAttached();


  // ============================================================
  // 10. VERIFY ALL EXPECTED OPTIONS
  // ============================================================

  const expectedOptions = [
    'Select Country',
    'India',
    'USA',
    'UK',
    'Canada',
    'Australia'
  ];

  for (const option of expectedOptions) {

    await expect(
      dropdown.locator('option', { hasText: option })
    ).toBeAttached();
  }


  // ============================================================
  // 11. SELECT BY VISIBLE TEXT
  // ============================================================

  await dropdown.selectOption({ label: 'India' });


  // ============================================================
  // 12. SELECT BY VALUE
  // ============================================================

  await dropdown.selectOption('usa');

  // OR
  await dropdown.selectOption({ value: 'uk' });


  // ============================================================
  // 13. SELECT BY INDEX
  // ============================================================

  // Index 0 = Select Country
  // Index 1 = India
  // Index 2 = USA
  // Index 3 = UK

  await dropdown.selectOption({ index: 1 });


  // ============================================================
  // 14. VERIFY SELECTED OPTION
  // ============================================================

  await dropdown.selectOption({ label: 'India' });

  await expect(dropdown).toHaveValue('india');


  // ============================================================
  // 15. GET SELECTED VALUE
  // ============================================================

  const selectedValue = await dropdown.inputValue();

  console.log('Selected value:', selectedValue);


  // ============================================================
  // 16. GET SELECTED OPTION TEXT
  // ============================================================

  const selectedText = await dropdown
    .locator('option:checked')
    .innerText();

  console.log('Selected text:', selectedText);


  // ============================================================
  // 17. VERIFY SELECTED OPTION TEXT
  // ============================================================

  await expect(dropdown.locator('option:checked'))
    .toHaveText('India');


  // ============================================================
  // 18. VERIFY OPTION VALUE
  // ============================================================

  await expect(dropdown.locator('option:checked'))
    .toHaveValue('india');


  // ============================================================
  // 19. CHECK OPTION ATTRIBUTE
  // ============================================================

  const indiaOption = dropdown.locator('option[value="india"]');

  const value = await indiaOption.getAttribute('value');

  console.log('India value:', value);


  // ============================================================
  // 20. CHECK IF OPTION IS SELECTED
  // ============================================================

  await dropdown.selectOption('india');

  await expect(indiaOption).toBeChecked();


  // ============================================================
  // 21. LOOP THROUGH OPTIONS
  // ============================================================

  for (let i = 0; i < count; i++) {

    const option = options.nth(i);

    console.log(
      'Text:',
      await option.innerText(),
      'Value:',
      await option.getAttribute('value')
    );
  }


  // ============================================================
  // 22. SELECT EACH OPTION ONE BY ONE
  // ============================================================

  for (let i = 1; i < count; i++) {

    await dropdown.selectOption({ index: i });

    console.log(
      'Selected:',
      await dropdown.locator('option:checked').innerText()
    );
  }


  // ============================================================
  // 23. VERIFY FIRST/DEFAULT OPTION
  // ============================================================

  await dropdown.selectOption({ index: 0 });

  await expect(dropdown).toHaveValue('');


  // ============================================================
  // 24. VERIFY DROPDOWN HAS REQUIRED NUMBER OF OPTIONS
  // ============================================================

  await expect(options).toHaveCount(6);


  // ============================================================
  // 25. VERIFY SPECIFIC OPTION BY VALUE
  // ============================================================

  await expect(
    dropdown.locator('option[value="canada"]')
  ).toHaveText('Canada');


  // ============================================================
  // 26. SELECT CANADA AND VERIFY
  // ============================================================

  await dropdown.selectOption('canada');

  await expect(dropdown).toHaveValue('canada');

  await expect(dropdown.locator('option:checked'))
    .toHaveText('Canada');


  // ============================================================
  // 27. FINAL SELECT
  // ============================================================

  await dropdown.selectOption({
    label: 'Australia'
  });

  console.log(
    'Final selected:',
    await dropdown.locator('option:checked').innerText()
  );

});