# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: my_tcs\formValidation.spec.ts >> Data Entry Form Validation >> 1. Page load validation
- Location: tests\my_tcs\formValidation.spec.ts:14:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://sdetqa.vercel.app/autoplay.html"
Received: "https://sdetqa.vercel.app/autoplay"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://sdetqa.vercel.app/autoplay"

```

```yaml
- navigation:
  - text:  AutoPlay
  - list:
    - listitem:
      - link " Home":
        - /url: "#home"
    - listitem:
      - link " Forms":
        - /url: "#forms"
    - listitem:
      - link " Tables":
        - /url: "#tables"
    - listitem:
      - link " Popups":
        - /url: "#popups"
    - listitem:
      - link " Files":
        - /url: "#files"
    - listitem:
      - link " Advanced":
        - /url: "#advanced"
- heading " Data Entry Form" [level=3]
- text: Full name
- textbox "Full name":
  - /placeholder: John Doe
  - text: John Doe
- text: Email
- textbox "Email":
  - /placeholder: john@example.com
  - text: john@example.com
- text: Phone
- textbox "Phone":
  - /placeholder: +1 234 567 890
  - text: +1 234 567 890
- text: Address
- textbox "Address": 123 Main St, City
- text: Gender
- radio "Male"
- text: Male
- radio "Female"
- text: Female Days (checkboxes)
- checkbox "Mon"
- text: Mon
- checkbox "Tue"
- text: Tue
- checkbox "Wed"
- text: Wed
- checkbox "Thu"
- text: Thu
- checkbox "Fri"
- text: Fri
- checkbox "Sat"
- text: Sat
- checkbox "Sun"
- text: Sun
- button " Submit"
- heading " Dropdowns & more" [level=3]
- text: Country
- combobox:
  - option "India" [selected]
  - option "USA"
  - option "UK"
  - option "Germany"
  - option "France"
- text: Multi-select (hold Ctrl)
- listbox:
  - option "Red"
  - option "Blue" [selected]
  - option "Green"
  - option "Yellow"
- text: Fruit list
- combobox:
  - option "Apple" [selected]
  - option "Banana"
  - option "Mango"
  - option "Orange"
- text: Scrollable (infinite)
- listbox:
  - option "Item 1"
  - option "Item 2"
  - option "Item 3"
  - option "Item 4"
  - option "Item 5"
  - option "Item 6"
  - option "Item 7"
  - option "Item 8"
  - option "Item 9"
  - option "Item 10"
  - option "Item 11"
  - option "Item 12"
  - option "Item 13"
  - option "Item 14"
  - option "Item 15"
  - option "Item 16"
  - option "Item 17"
  - option "Item 18"
  - option "Item 19"
  - option "Item 20"
- heading " Date Picker (with navigation)" [level=3]
- text: Select the date
- textbox "mm/dd/yyyy"
- heading " Date Picker (with select)" [level=3]
- text: Select the date
- textbox "dd/mm/yyyy"
- heading " Date Range Selector" [level=3]
- textbox:
  - /placeholder: Start Date
- text: to
- textbox:
  - /placeholder: End Date
- button " Submit"
- heading " Static Web Table" [level=3]
- table:
  - rowgroup:
    - row "Product Name Category Price Stock Status":
      - columnheader "Product Name"
      - columnheader "Category"
      - columnheader "Price"
      - columnheader "Stock"
      - columnheader "Status"
  - rowgroup:
    - row "Laptop Electronics $999 15 In Stock":
      - cell "Laptop"
      - cell "Electronics"
      - cell "$999"
      - cell "15"
      - cell "In Stock"
    - row "Mouse Electronics $29 50 In Stock":
      - cell "Mouse"
      - cell "Electronics"
      - cell "$29"
      - cell "50"
      - cell "In Stock"
    - row "Keyboard Electronics $79 0 Out of Stock":
      - cell "Keyboard"
      - cell "Electronics"
      - cell "$79"
      - cell "0"
      - cell "Out of Stock"
    - row "Monitor Electronics $349 8 In Stock":
      - cell "Monitor"
      - cell "Electronics"
      - cell "$349"
      - cell "8"
      - cell "In Stock"
- heading " Web Table with CRUD" [level=3]
- table:
  - rowgroup:
    - row "# Name Role Action":
      - columnheader "#"
      - columnheader "Name"
      - columnheader "Role"
      - columnheader "Action"
  - rowgroup:
    - row "1 Alice Engineer Delete":
      - cell "1"
      - cell "Alice"
      - cell "Engineer"
      - cell "Delete":
        - button "Delete"
    - row "2 Bob Designer Delete":
      - cell "2"
      - cell "Bob"
      - cell "Designer"
      - cell "Delete":
        - button "Delete"
- textbox "Name"
- textbox "Role"
- button "+ Add"
- button "+ Dynamic"
- textbox "Search table..."
- heading " Dynamic System Processes Table" [level=3]
- table:
  - rowgroup:
    - row "Name Disk (MB/s) Network (Mbps) CPU (%) Memory (MB)":
      - columnheader "Name"
      - columnheader "Disk (MB/s)"
      - columnheader "Network (Mbps)"
      - columnheader "CPU (%)"
      - columnheader "Memory (MB)"
  - rowgroup:
    - row "Firefox 0.43 MB/s 4.7 Mbps 0.7% 83.5 MB":
      - cell "Firefox"
      - cell "0.43 MB/s"
      - cell "4.7 Mbps"
      - cell "0.7%"
      - cell "83.5 MB"
    - row "Internet Explorer 0.74 MB/s 0.4 Mbps 2.0% 34.6 MB":
      - cell "Internet Explorer"
      - cell "0.74 MB/s"
      - cell "0.4 Mbps"
      - cell "2.0%"
      - cell "34.6 MB"
    - row "System 0.30 MB/s 3.7 Mbps 7.8% 46.0 MB":
      - cell "System"
      - cell "0.30 MB/s"
      - cell "3.7 Mbps"
      - cell "7.8%"
      - cell "46.0 MB"
    - row "Chrome 0.24 MB/s 2.4 Mbps 0.2% 84.5 MB":
      - cell "Chrome"
      - cell "0.24 MB/s"
      - cell "2.4 Mbps"
      - cell "0.2%"
      - cell "84.5 MB"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 0.2%
  - text: "Memory Size of Firefox process:"
  - strong: 83.5 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 2.4 Mbps
  - text: "Disk space of Firefox process:"
  - strong: 0.43 MB/s
- heading " Alerts" [level=3]
- button "Simple"
- button "Confirm"
- button "Prompt"
- heading " Popups" [level=3]
- button "Popup"
- button "New Tab"
- button "New Window"
- heading " Toggle Button" [level=3]
- button "Start"
- button "Right Click Me"
- heading " File Upload" [level=3]
- text: Single
- button "Choose File"
- button "Upload Single File"
- paragraph
- text: Multiple
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading " File Download" [level=3]
- button " Download File"
- button "Open PDF"
- heading " Interactive Tooltip" [level=3]
- text: Hover me
- heading " Shadow DOM" [level=3]
- text: Mobiles Laptops
- link "Blog":
  - /url: https://www.pavantestingtools.com/
- textbox
- checkbox
- button "Choose File"
- link "Youtube":
  - /url: https://www.youtube.com/@sdetpavan/videos
- heading " SVG Elements" [level=3]
- paragraph: Basic Shapes
- img
- paragraph: Bar Chart
- img: A B C D E
- heading " Hover & Double Click" [level=3]
- button "Hover me"
- button "Double click"
- text: Field1
- textbox: Hello World!
- text: Field2
- textbox
- button "Copy Text"
- paragraph: Double‑click button to copy Field1 → Field2
- heading " Drag & Drop Interaction" [level=3]
- text: Drag me Drop zone
- heading " Range Slider" [level=3]
- slider: "50"
- text: "50"
- paragraph:
  - text: "Price range:"
  - textbox "Price range:": $75 - $300
- heading " Nested frames" [level=3]
- iframe
- heading " iframe (external)" [level=3]
- iframe
- separator
- text: Automation Playground
- link "@SDET-QA By Pavan":
  - /url: https://www.youtube.com/@sdetpavan
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | const pageUrl = 'https://sdetqa.vercel.app/autoplay.html';
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
> 16 |     await expect(page).toHaveURL(pageUrl);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
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
  62 |   await expect(suggestions.first()).toBeVisible();
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