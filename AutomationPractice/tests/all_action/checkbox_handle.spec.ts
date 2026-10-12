import { test, expect } from '@playwright/test';

test('Checkbox - All Common Operations', async ({ page }) => {

  await page.goto('YOUR_URL');

  // ============================================================
  // SAMPLE DOM
  //
  // <div role="group" aria-label="Fruits">
  //   <label>
  //     <input type="checkbox" aria-label="Apple">
  //     Apple
  //   </label>
  //   <label>
  //     <input type="checkbox" aria-label="Banana">
  //     Banana
  //   </label>
  //   <label>
  //     <input type="checkbox" aria-label="Mango">
  //     Mango
  //   </label>
  // </div>
  // ============================================================


  // ============================================================
  // 1. LOCATE GROUP
  // ============================================================

  const fruits = page.getByRole('group', {
    name: 'Fruits'
  });


  // ============================================================
  // 2. LOCATE ALL CHECKBOXES
  // ============================================================

  const fruitCheckboxes = fruits.getByRole('checkbox');


  // ============================================================
  // 3. COUNT CHECKBOXES
  // ============================================================

  const total = await fruitCheckboxes.count();

  console.log(`Total checkboxes: ${total}`);

  expect(total).toBeGreaterThan(0);


  // ============================================================
  // 4. VERIFY ALL CHECKBOXES ARE VISIBLE
  // ============================================================

  for (const checkbox of await fruitCheckboxes.all()) {
    await expect(checkbox).toBeVisible();
  }


  // ============================================================
  // 5. CHECK ALL CHECKBOXES
  // ============================================================

  for (const checkbox of await fruitCheckboxes.all()) {

    await checkbox.check();

    await expect(checkbox).toBeChecked();
  }


  // ============================================================
  // 6. UNCHECK ALL CHECKBOXES
  // ============================================================

  for (const checkbox of await fruitCheckboxes.all()) {

    await checkbox.uncheck();

    await expect(checkbox).not.toBeChecked();
  }


  // ============================================================
  // 7. TOGGLE ALL
  //
  // Checked   -> Unchecked
  // Unchecked -> Checked
  // ============================================================

  for (const checkbox of await fruitCheckboxes.all()) {

    if (await checkbox.isChecked()) {

      await checkbox.uncheck();

      await expect(checkbox).not.toBeChecked();

    } else {

      await checkbox.check();

      await expect(checkbox).toBeChecked();
    }
  }


  // ============================================================
  // 8. CHECK ONLY UNCHECKED CHECKBOXES
  // ============================================================

  for (const checkbox of await fruitCheckboxes.all()) {

    if (!(await checkbox.isChecked())) {
      await checkbox.check();
    }

    await expect(checkbox).toBeChecked();
  }


  // ============================================================
  // 9. UNCHECK ONLY CHECKED CHECKBOXES
  // ============================================================

  for (const checkbox of await fruitCheckboxes.all()) {

    if (await checkbox.isChecked()) {
      await checkbox.uncheck();
    }

    await expect(checkbox).not.toBeChecked();
  }


  // ============================================================
  // 10. CLICK ALL CHECKBOXES
  // ============================================================

  for (const checkbox of await fruitCheckboxes.all()) {

    await checkbox.click();

    await expect(checkbox).toBeChecked();
  }


  // ============================================================
  // 11. SAFE TOGGLE USING CLICK
  // ============================================================

  for (const checkbox of await fruitCheckboxes.all()) {

    if (await checkbox.isChecked()) {

      await checkbox.click();

      await expect(checkbox).not.toBeChecked();

    } else {

      await checkbox.click();

      await expect(checkbox).toBeChecked();
    }
  }


  // ============================================================
  // 12. INDIVIDUAL CHECKBOX
  // ============================================================

  const apple = fruits.getByRole('checkbox', {
    name: 'Apple'
  });

  await expect(apple).toBeVisible();


  // Check Apple
  await apple.check();

  await expect(apple).toBeChecked();


  // Uncheck Apple
  await apple.uncheck();

  await expect(apple).not.toBeChecked();


  // ============================================================
  // 13. CHECK ONLY IF UNCHECKED
  // ============================================================

  if (!(await apple.isChecked())) {
    await apple.check();
  }

  await expect(apple).toBeChecked();


  // ============================================================
  // 14. UNCHECK ONLY IF CHECKED
  // ============================================================

  if (await apple.isChecked()) {
    await apple.uncheck();
  }

  await expect(apple).not.toBeChecked();


  // ============================================================
  // 15. VERIFY AT LEAST ONE CHECKED
  // ============================================================

  await apple.check();

  let checkedCount = 0;

  for (const checkbox of await fruitCheckboxes.all()) {

    if (await checkbox.isChecked()) {
      checkedCount++;
    }
  }

  expect(checkedCount).toBeGreaterThan(0);


  // ============================================================
  // 16. VERIFY EXACT CHECKED COUNT
  // ============================================================

  console.log(`Checked checkboxes: ${checkedCount}`);

  expect(checkedCount).toBe(1);


  // ============================================================
  // 17. VERIFY SPECIFIC CHECKBOX
  // ============================================================

  await expect(
    fruits.getByRole('checkbox', {
      name: 'Apple'
    })
  ).toBeChecked();


  // ============================================================
  // 18. VERIFY EACH CHECKBOX
  // CHECK -> VERIFY -> UNCHECK -> VERIFY
  // ============================================================

  for (const checkbox of await fruitCheckboxes.all()) {

    await expect(checkbox).toBeVisible();

    await checkbox.check();

    await expect(checkbox).toBeChecked();

    await checkbox.uncheck();

    await expect(checkbox).not.toBeChecked();
  }


  // ============================================================
  // 19. FINAL: CHECK ALL + VERIFY ALL
  // ============================================================

  for (const checkbox of await fruitCheckboxes.all()) {

    await checkbox.check();

    await expect(checkbox).toBeChecked();
  }

});