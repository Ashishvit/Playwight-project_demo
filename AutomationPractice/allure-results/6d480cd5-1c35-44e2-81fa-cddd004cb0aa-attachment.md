# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: my_tcs\cookies_demo.spec.ts >> Login and save cookies
- Location: tests\my_tcs\cookies_demo.spec.ts:8:5

# Error details

```
TimeoutError: locator.fill: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Username' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - text:         
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]: 
        - text: Dashboard Welcome
      - generic [ref=e8]:
        - generic [ref=e9]: 
        - text: Cookie
    - generic [ref=e10]:
      - generic [ref=e11]: 
      - text: You are authenticated via cookie.
    - generic [ref=e12]:
      - paragraph [ref=e13]:
        - generic [ref=e14]: 
        - strong [ref=e15]: "Logged in as:"
        - generic [ref=e16]: admin
      - paragraph [ref=e17]:
        - generic [ref=e18]: 
        - strong [ref=e19]: "Session:"
        - generic [ref=e20]: Persistent
      - paragraph [ref=e21]:
        - generic [ref=e22]: 
        - strong [ref=e23]: "Storage:"
        - generic [ref=e24]: Cookie (7d)
      - generic [ref=e25]:
        - generic [ref=e26]: 
        - text: Active session
    - separator [ref=e27]
    - generic [ref=e28]:
      - generic [ref=e29]: 
      - text: Close/reopen tab to test persistence.
    - button " Logout & clear storage" [ref=e30] [cursor=pointer]:
      - generic [ref=e31]: 
      - text: Logout & clear storage
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import fs from 'fs';
  4  | 
  5  | const appURL = 'https://sdetqa.vercel.app/login_app';
  6  | const authFile = 'playwright/.auth/user.json';
  7  | 
  8  | test('Login and save cookies', async ({ page }) => {
  9  | 
  10 |   fs.mkdirSync('playwright/.auth', { recursive: true });
  11 | 
  12 |   await page.goto(appURL);
  13 | 
> 14 |    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
     |                                                          ^ TimeoutError: locator.fill: Timeout 15000ms exceeded.
  15 |     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  16 |     await page.getByLabel('🍪 Cookie').check();
  17 |     await page.getByRole('button', { name: 'Login' }).click();
  18 |     await expect(page.getByText('Dashboard Welcome', { exact: true })).toBeVisible()
  19 | 
  20 | 
  21 |   // Save authentication state
  22 |   const authFile = 'cookies_file/user.json';
  23 |   await page.context().storageState({ path: authFile });
  24 | });
  25 | 
  26 | test('Login using saved cookies', async ({ page }) => {
  27 | 
  28 |   // Open application without entering credentials
  29 |   await page.goto(appURL);
  30 | 
  31 |   // Verify dashboard is visible
  32 |   await expect( page.getByText('Dashboard Welcome', { exact: true })).toBeVisible();
  33 | 
  34 | });
  35 | 
  36 | 
  37 | 
  38 | 
```