import { test, expect } from '@playwright/test';

test('Select date from Cleartrip calendar', async ({ page }) => {

  await page.goto('https://www.cleartrip.com/');

  // Open Departure calendar
  await page.getByTestId('dateSelectOnward').click();

  // Target date
  const targetDay = '25';
  const targetMonth = 'December';
  const targetYear = '2026';

  // Keep moving until target month & year
  while (true) {

const monthYear = await page.locator('.DayPicker-Caption').first().innerText();

  if (monthYear.trim() === `${targetMonth} ${targetYear}`) {
   break;
 }
// if (monthYear.includes(targetMonth) && monthYear.includes(targetYear)) {
   // break;
//}
const nextButton = page.getByTestId('rightArrow');

if (await nextButton.isEnabled()) {
  await nextButton.click();
}

    // Click Next month 
  }

  // Select target day
  await page.locator('[class="DayPicker-Day"]').filter({ hasText: targetDay }).first().click();
  //await page.waitForTimeout(3000);
});