# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: my_tcs\formValidation.spec.ts >> Data Entry Form Validation >> Google autocomplete - select second suggestion
- Location: tests\my_tcs\formValidation.spec.ts:52:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('ul[role="listbox"] li').first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('ul[role="listbox"] li').first()
  - Target page, context or browser has been closed

```

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps"
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img "Google"
- search:
  - button "Add files and tools"
  - combobox "Search" [expanded]:
    - text: cricket
    - listbox:
      - option "cricket"
      - option "cricket score"
      - option "cricket live"
      - option "cricket ko hindi mein kya kahate hain"
      - option "cricket match"
      - option "cricket live score"
      - option "cricket match in ranchi"
      - option "cricket kit"
      - option "cricket exchange"
      - option "cricket game"
  - link "AI Mode"
  - button "Google Search"
  - button "Report inappropriate predictions"
  - button "Create images"
  - button "Ask about files"
  - button "Brainstorm"
  - button "I am feeling lucky"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_hKPfgMPv-1vwQEC5h8HG0LXYfxA%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjc4sO78bGXAxVnxzgGHXW-CC8Q2ZgBCCg
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_hKPfgMPv-1vwQEC5h8HG0LXYfxA%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjc4sO78bGXAxVnxzgGHXW-CC8Q2ZgBCCk
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_hKPfgMPv-1vwQEC5h8HG0LXYfxA%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjc4sO78bGXAxVnxzgGHXW-CC8Q2ZgBCCo
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_hKPfgMPv-1vwQEC5h8HG0LXYfxA%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjc4sO78bGXAxVnxzgGHXW-CC8Q2ZgBCCs
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_hKPfgMPv-1vwQEC5h8HG0LXYfxA%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjc4sO78bGXAxVnxzgGHXW-CC8Q2ZgBCCw
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_hKPfgMPv-1vwQEC5h8HG0LXYfxA%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjc4sO78bGXAxVnxzgGHXW-CC8Q2ZgBCC0
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_hKPfgMPv-1vwQEC5h8HG0LXYfxA%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjc4sO78bGXAxVnxzgGHXW-CC8Q2ZgBCC4
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_hKPfgMPv-1vwQEC5h8HG0LXYfxA%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjc4sO78bGXAxVnxzgGHXW-CC8Q2ZgBCC8
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_hKPfgMPv-1vwQEC5h8HG0LXYfxA%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjc4sO78bGXAxVnxzgGHXW-CC8Q2ZgBCDA
- contentinfo:
  - text: India
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | const pageUrl = 'https://sdetqa.vercel.app/autoplay';
  5  | 
  6  | test.describe('Data Entry Form Validation', () => {
  7  | 
  8  |   test.beforeEach(async ({ page }) => {
  9  |     await page.goto(pageUrl);
  10 |     //await expect(page.getByText('AutoPlay')).toBeVisible();
  11 |     //await expect(page.locator('span.logo')).toBeVisible();
  12 |   });
  13 | 
  14 |   test('1. Page load validation', async ({ page }) => {
  15 |     // Verify the page URL
  16 |     await expect(page).toHaveURL(pageUrl);
  17 | 
  18 |     // Verify the heading is visible
  19 |     await expect(page.getByText('AutoPlay')).toBeVisible();
  20 |   });
  21 | 
  22 |   test('2. Input fields validation', async ({ page }) => {
  23 |     const nameField = page.getByLabel('Full name');
  24 |     const emailField = page.getByLabel('Email');
  25 |     const phoneField = page.getByLabel('Phone');
  26 |     const addressField = page.getByLabel('Address');
  27 | 
  28 |     // Full name validation
  29 |     await expect(nameField).toBeVisible();
  30 |     await expect(nameField).toBeEnabled();
  31 |     await expect(nameField).toHaveAttribute('maxlength', '15');
  32 | 
  33 |     await nameField.fill('John Canedy');
  34 |     await expect(nameField).toHaveValue('John Canedy');
  35 | 
  36 |     // Email validation
  37 |     await expect(emailField).toBeVisible();
  38 |     await emailField.fill('tester@example.com');
  39 |     await expect(emailField).toHaveValue('tester@example.com');
  40 | 
  41 |     // Phone validation
  42 |     await expect(phoneField).toBeVisible();
  43 |     await phoneField.fill('+91 1234567898');
  44 |     await expect(phoneField).toHaveValue('+91 1234567898');
  45 | 
  46 |     // Address validation
  47 |     await expect(addressField).toBeVisible();
  48 |     await addressField.fill('123 Xyz Lane\nDelhi, India');
  49 |     await expect(addressField).toHaveValue( '123 Xyz Lane\nDelhi, India' );
  50 |  });
  51 | 
  52 |  test('Google autocomplete - select second suggestion', async ({ page }) => {
  53 |   await page.goto('https://www.google.com/');
  54 | 
  55 |   // Enter search text
  56 |   const searchBox = page.getByRole('combobox', { name: /search/i });
  57 |   await searchBox.fill('cricket');
  58 | 
  59 |   // Wait for Google autocomplete suggestions
  60 |   const suggestions = page.locator('ul[role="listbox"] li');
  61 | 
> 62 |   await expect(suggestions.first()).toBeVisible();
     |                                     ^ Error: expect(locator).toBeVisible() failed
  63 | 
  64 |   // Click the second suggestion (index 1)
  65 |   await suggestions.nth(1).click();
  66 | 
  67 |   // Verify navigation/search results
  68 |   await expect(page).toHaveURL(/search/);
  69 | });
  70 | 
  71 | });
  72 | 
```