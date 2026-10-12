# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: my_tcs\cookies_demo.spec.ts >> Login using saved cookies
- Location: tests\my_tcs\cookies_demo.spec.ts:26:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByText('Dashboard Welcome', { exact: true })
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Dashboard Welcome', { exact: true })
    14 × locator resolved to <div class="greeting">…</div>
       - unexpected value "hidden"

```

```yaml
- heading " Sign in" [level=1]
- text: 🔐 Try
- strong: admin
- text: /
- strong: admin123
- text: or
- strong: testuser1
- text: /
- strong: testuser123
- text: · choose storage below  Username 
- textbox " Username":
  - /placeholder: Enter username
  - text: admin
- text:  Password 
- textbox " Password":
  - /placeholder: Enter password
  - text: admin123
- text: " Store:"
- radio "🍪 Cookie" [checked]
- text: 🍪 Cookie
- radio "💾 Local"
- text: 💾 Local
- radio "⏳ Session"
- text: ⏳ Session
- button " Login"
- text:  Session persists based on your choice
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
  14 |    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
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
> 32 |   await expect( page.getByText('Dashboard Welcome', { exact: true })).toBeVisible();
     |                                                                       ^ Error: expect(locator).toBeVisible() failed
  33 | 
  34 | });
  35 | 
  36 | 
  37 | 
  38 | 
```