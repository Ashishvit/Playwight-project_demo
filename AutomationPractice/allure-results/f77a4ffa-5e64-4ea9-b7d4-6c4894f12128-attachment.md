# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: my_tcs\test123.spec.ts >> OrangeHRM Login and Create Buzz Post
- Location: tests\my_tcs\test123.spec.ts:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Post' }) resolved to 4 elements:
    1) <button type="button" data-v-10d463b7="" data-v-33fec775="" class="oxd-button oxd-button--medium oxd-button--label-warn orangehrm-post-filters-button">…</button> aka getByRole('button', { name: ' Most Recent Posts' })
    2) <button type="button" data-v-10d463b7="" data-v-33fec775="" class="oxd-button oxd-button--medium oxd-button--text orangehrm-post-filters-button">…</button> aka getByRole('button', { name: ' Most Liked Posts' })
    3) <button type="button" data-v-10d463b7="" data-v-33fec775="" class="oxd-button oxd-button--medium oxd-button--text orangehrm-post-filters-button">…</button> aka getByRole('button', { name: ' Most Commented Posts' })
    4) <button type="submit" data-v-10d463b7="" data-v-2afe39e0="" class="oxd-button oxd-button--medium oxd-button--main">…</button> aka getByRole('button', { name: 'Post', exact: true })

Call log:
  - waiting for getByRole('button', { name: 'Post' })

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - heading "Buzz" [level=6] [ref=f2e114]
        - link [ref=f2e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e117] [cursor=pointer]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - generic [ref=f2e125] [cursor=pointer]:
              - img "profile picture" [ref=f2e126]
              - paragraph [ref=f2e127]: bJWAhppQIS user
              - generic [ref=f2e128]: 
      - navigation "Topbar Menu" [ref=f2e130]:
        - list [ref=f2e131]:
          - button "" [ref=f2e133] [cursor=pointer]
  - generic [ref=f2e135]:
    - generic [ref=f2e137]:
      - generic [ref=f2e139]:
        - button " Most Recent Posts" [ref=f2e140] [cursor=pointer]:
          - generic [ref=f2e141]: 
          - text: Most Recent Posts
        - button " Most Liked Posts" [ref=f2e142] [cursor=pointer]:
          - generic [ref=f2e143]: 
          - text: Most Liked Posts
        - button " Most Commented Posts" [ref=f2e144] [cursor=pointer]:
          - generic [ref=f2e145]: 
          - text: Most Commented Posts
      - generic [ref=f2e147]:
        - paragraph [ref=f2e148]: Buzz Newsfeed
        - generic [ref=f2e149]:
          - generic [ref=f2e150]:
            - img "profile picture" [ref=f2e152]
            - generic [ref=f2e155]:
              - textbox "What's on your mind?" [active] [ref=f2e156]: Practicing Playwright automation testing!
              - button "Post" [ref=f2e158] [cursor=pointer]
          - separator [ref=f2e159]
          - generic [ref=f2e160]:
            - button "Share Photos" [ref=f2e161] [cursor=pointer]
            - button "Share Video" [ref=f2e163] [cursor=pointer]
      - paragraph [ref=f2e169]: Upcoming Anniversaries
    - generic [ref=f2e170]:
      - paragraph [ref=f2e171]: OrangeHRM OS 5.9
      - paragraph [ref=f2e172]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e173] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('OrangeHRM Login and Create Buzz Post', async ({ page }) => {
  4  | 
  5  |   // Open OrangeHRM
  6  |   await page.goto('https://opensource-demo.orangehrmlive.com/');
  7  | 
  8  |   // Login
  9  |   await page.getByPlaceholder('Username').fill('Admin');
  10 |   await page.getByPlaceholder('Password').fill('admin123');
  11 |   await page.getByRole('button', { name: 'Login' }).click();
  12 | 
  13 |   // Verify successful login
  14 |   await expect(page).toHaveURL(/dashboard/);
  15 | 
  16 |   // Click Buzz
  17 |   await page.getByRole('link', { name: 'Buzz' }).click();
  18 | 
  19 |   // Verify Buzz page
  20 |   await expect(
  21 |     page.getByText('Buzz', { exact: true }).first()
  22 |   ).toBeVisible();
  23 | 
  24 |   // Enter post text
  25 |   await page.locator('textarea').fill(
  26 |     'Practicing Playwright automation testing!'
  27 |   );
  28 | 
  29 |   // Click Post
> 30 |   await page.getByRole('button', { name: 'Post' }).click();
     |                                                    ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Post' }) resolved to 4 elements:
  31 | 
  32 |   // Verify post is displayed
  33 |   await expect(
  34 |     page.getByText('Practicing Playwright automation testing!')
  35 |   ).toBeVisible();
  36 | 
  37 | });
```