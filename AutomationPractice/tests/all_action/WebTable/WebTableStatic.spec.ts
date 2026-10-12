import { test, expect } from '@playwright/test';

test('Employee Table - All Operations', async ({ page }) => {

  // =========================================================
  // 1. SMALL STATIC EMPLOYEE TABLE
  // =========================================================

  await page.setContent(`
    <table id="employees" border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>101</td>
          <td>Ashish</td>
          <td>QA Engineer</td>
          <td>50000</td>
          <td><button onclick="alert('Ashish clicked')">View</button></td>
        </tr>

        <tr>
          <td>102</td>
          <td>Rahul</td>
          <td>Developer</td>
          <td>60000</td>
          <td><button onclick="alert('Rahul clicked')">View</button></td>
        </tr>

        <tr>
          <td>103</td>
          <td>Priya</td>
          <td>Manager</td>
          <td>80000</td>
          <td><button onclick="alert('Priya clicked')">View</button></td>
        </tr>

      </tbody>
    </table>
  `);


  // =========================================================
  // 2. LOCATE TABLE
  // =========================================================

  const table = page.locator('#employees');


  // =========================================================
  // 3. GET ALL ROWS
  // tbody tr = all data rows
  // =========================================================

  const rows = table.locator('tbody tr');

  console.log('Total Rows:', await rows.count());


  // =========================================================
  // 4. COUNT COLUMNS
  // First row's TDs = columns
  // =========================================================

  const columns = rows.first().locator('td');

  console.log('Total Columns:', await columns.count());


  // =========================================================
  // 5. GET PARTICULAR CELL
  // Row 1, Column 1 = ID
  // nth(0) = first row / first column
  // =========================================================

  const id = await rows.nth(0).locator('td').nth(0).innerText();

  console.log('First Employee ID:', id);


  // =========================================================
  // 6. GET ROW 2, COLUMN 3
  // nth(1) = second row
  // nth(2) = third column
  // =========================================================

  const designation =
    await rows.nth(1).locator('td').nth(2).innerText();

  console.log('Row 2 Designation:', designation);


  // =========================================================
  // 7. GET COMPLETE ROW
  // =========================================================

  const firstRowText = await rows.nth(0).innerText();

  console.log('First Employee:', firstRowText);


  // =========================================================
  // 8. PRINT ALL ROWS
  // all() gets every row
  // for...of processes rows one by one
  // =========================================================

  for (const row of await rows.all()) {

    console.log('Employee:', await row.innerText());

  }


  // =========================================================
  // 9. PRINT EACH COLUMN VALUE
  // ID, Name, Designation, Salary
  // =========================================================

  for (const row of await rows.all()) {

    const id = await row.locator('td').nth(0).innerText();
    const name = await row.locator('td').nth(1).innerText();
    const designation = await row.locator('td').nth(2).innerText();
    const salary = await row.locator('td').nth(3).innerText();

    console.log(
      id,
      name,
      designation,
      salary
    );

  }


  // =========================================================
  // 10. FIND EMPLOYEE BY ID = 101
  // hasText finds the row containing 101
  // =========================================================

  const emp101 = rows.filter({ hasText: '101' });

  console.log(
    'Employee 101:',
    await emp101.innerText()
  );


  // =========================================================
  // 11. GET NAME OF EMPLOYEE 101
  // =========================================================

  const emp101Name =
    await emp101.locator('td').nth(1).innerText();

  console.log('Employee 101 Name:', emp101Name);


  // =========================================================
  // 12. GET DESIGNATION OF EMPLOYEE 101
  // =========================================================

  const emp101Designation =
    await emp101.locator('td').nth(2).innerText();

  console.log(
    'Employee 101 Designation:',
    emp101Designation
  );


  // =========================================================
  // 13. GET SALARY OF EMPLOYEE 101
  // =========================================================

  const emp101Salary =
    await emp101.locator('td').nth(3).innerText();

  console.log(
    'Employee 101 Salary:',
    emp101Salary
  );


  // =========================================================
  // 14. ASSERT EMPLOYEE 101 DATA
  // =========================================================

  await expect(emp101.locator('td').nth(0))
    .toHaveText('101');

  await expect(emp101.locator('td').nth(1))
    .toHaveText('Ashish');

  await expect(emp101.locator('td').nth(2))
    .toHaveText('QA Engineer');

  await expect(emp101.locator('td').nth(3))
    .toHaveText('50000');


  // =========================================================
  // 15. FIND ALL DEVELOPER ROWS
  // =========================================================

  const developers =
    rows.filter({ hasText: 'Developer' });

  console.log(
    'Developer Count:',
    await developers.count()
  );


  // =========================================================
  // 16. FIND EMPLOYEE WITH SALARY 80000
  // =========================================================

  const highSalary =
    rows.filter({ hasText: '80000' });

  console.log(
    '80000 Salary Employee:',
    await highSalary.innerText()
  );


  // =========================================================
  // 17. LOOP THROUGH ROWS AND FIND ID 101
  // =========================================================

  for (const row of await rows.all()) {

    const employeeId =
      await row.locator('td').nth(0).innerText();

    if (employeeId === '101') {

      console.log(
        'Found Employee 101:',
        await row.innerText()
      );

    }

  }


  // =========================================================
  // 18. GET ALL EMPLOYEE NAMES
  // =========================================================

  for (const row of await rows.all()) {

    const name =
      await row.locator('td').nth(1).innerText();

    console.log('Name:', name);

  }


  // =========================================================
  // 19. CLICK VIEW BUTTON FOR EMPLOYEE 101
  // =========================================================

  await emp101.locator('button').click();


  // =========================================================
  // 20. CHECK ROW COUNT
  // =========================================================

  await expect(rows).toHaveCount(3);


  // =========================================================
  // 21. CHECK COLUMN COUNT
  // =========================================================

  await expect(columns).toHaveCount(5);


  // =========================================================
  // 22. PRINT COMPLETE TABLE DATA
  // =========================================================

  console.log(
    'Complete Table:',
    await table.innerText()
  );

});