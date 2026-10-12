import { test, expect } from '@playwright/test';

test('Dynamic Pagination - Read All Pages', async ({ page }) => {

  // Create dynamic pagination table
  await page.setContent(`
    <table id="employees" border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
      </thead>

      <tbody id="tableBody"></tbody>
    </table>

    <br>

    <button id="first">First</button>
    <button id="previous">Previous</button>
    <button id="next">Next</button>
    <button id="last">Last</button>

    <span id="pageInfo"></span>

    <script>

      const employees = [
        {id:101, name:'Ashish', designation:'QA Engineer', salary:50000},
        {id:102, name:'Rahul', designation:'Developer', salary:60000},
        {id:103, name:'Amit', designation:'Tester', salary:45000},
        {id:104, name:'John', name:'John', designation:'Manager', salary:80000},
        {id:105, name:'David', designation:'Developer', salary:65000},
        {id:106, name:'Peter', designation:'Tester', salary:48000},
        {id:107, name:'Sam', designation:'QA Engineer', salary:55000}
      ];

      let currentPage = 1;
      const rowsPerPage = 2;

      function showPage(page) {

        const totalPages =
          Math.ceil(employees.length / rowsPerPage);

        currentPage = page;

        const start =
          (currentPage - 1) * rowsPerPage;

        const data =
          employees.slice(start, start + rowsPerPage);

        document.getElementById('tableBody').innerHTML =
          data.map(emp => \`
            <tr>
              <td>\${emp.id}</td>
              <td>\${emp.name}</td>
              <td>\${emp.designation}</td>
              <td>\${emp.salary}</td>
            </tr>
          \`).join('');

        document.getElementById('pageInfo').innerText =
          'Page ' + currentPage + ' of ' + totalPages;

        document.getElementById('previous').disabled =
          currentPage === 1;

        document.getElementById('next').disabled =
          currentPage === totalPages;

        document.getElementById('first').disabled =
          currentPage === 1;

        document.getElementById('last').disabled =
          currentPage === totalPages;
      }

      document.getElementById('first').onclick = () => {
        showPage(1);
      };

      document.getElementById('previous').onclick = () => {
        if (currentPage > 1) {
          showPage(currentPage - 1);
        }
      };

      document.getElementById('next').onclick = () => {
        const totalPages =
          Math.ceil(employees.length / rowsPerPage);

        if (currentPage < totalPages) {
          showPage(currentPage + 1);
        }
      };

      document.getElementById('last').onclick = () => {
        const totalPages =
          Math.ceil(employees.length / rowsPerPage);

        showPage(totalPages);
      };

      showPage(1);

    </script>
  `);


  // Locate the table
  const table = page.locator('#employees');


  // ==================================================
  // 1. Start from FIRST page
  // ==================================================

  await page.locator('#first').click();


  // ==================================================
  // 2. Read EVERY page
  //    We don't know how many pages exist
  // ==================================================

  while (true) {

    // Get all rows from current page
    const rows = table.locator('tbody tr');

    console.log('================================');

    console.log(
      'Current Page:',
      await page.locator('#pageInfo').innerText()
    );

    console.log('================================');


    // Read every row on current page
    for (let i = 0; i < await rows.count(); i++) {

      const row = rows.nth(i);

      // Get complete row
      console.log(
        'Row:',
        await row.innerText()
      );

      // Get ID
      const id = await row
        .locator('td')
        .nth(0)
        .innerText();

      // Get Name
      const name = await row
        .locator('td')
        .nth(1)
        .innerText();

      // Get Designation
      const designation = await row
        .locator('td')
        .nth(2)
        .innerText();

      // Get Salary
      const salary = await row
        .locator('td')
        .nth(3)
        .innerText();

      console.log(
        id,
        name,
        designation,
        salary
      );
    }


    // ==================================================
    // 3. Check whether NEXT is disabled
    // ==================================================

    const nextButton = page.locator('#next');

    const isNextDisabled =
      await nextButton.isDisabled();


    // ==================================================
    // 4. If Next is disabled, we reached LAST page
    // ==================================================

    if (isNextDisabled) {

      console.log('Reached Last Page');

      break;
    }


    // ==================================================
    // 5. Otherwise click NEXT
    // ==================================================

    await nextButton.click();
  }


  // ==================================================
  // 6. Go to FIRST page
  // ==================================================

  await page.locator('#first').click();

  console.log('Back to First Page');


  // ==================================================
  // 7. NEXT operation
  // ==================================================

  await page.locator('#next').click();

  console.log(
    'After Next:',
    await page.locator('#pageInfo').innerText()
  );


  // ==================================================
  // 8. PREVIOUS operation
  // ==================================================

  await page.locator('#previous').click();

  console.log(
    'After Previous:',
    await page.locator('#pageInfo').innerText()
  );


  // ==================================================
  // 9. LAST operation
  // ==================================================

  await page.locator('#last').click();

  console.log(
    'After Last:',
    await page.locator('#pageInfo').innerText()
  );


  // ==================================================
  // 10. Verify table is visible
  // ==================================================

  await expect(table).toBeVisible();

});