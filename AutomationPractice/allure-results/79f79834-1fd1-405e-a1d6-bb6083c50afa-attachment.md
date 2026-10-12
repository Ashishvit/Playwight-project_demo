# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: form_Validation_pw.spec.ts\form_validationn_pw.spec.ts >> Data Entry Form Validation >> 1. Page load validation
- Location: tests\form_Validation_pw.spec.ts\form_validationn_pw.spec.ts:11:7

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
    - row "Name Disk (MB/s) CPU (%) Memory (MB) Network (Mbps)":
      - columnheader "Name"
      - columnheader "Disk (MB/s)"
      - columnheader "CPU (%)"
      - columnheader "Memory (MB)"
      - columnheader "Network (Mbps)"
  - rowgroup:
    - row "Firefox 0.49 MB/s 5.3% 62.7 MB 5.5 Mbps":
      - cell "Firefox"
      - cell "0.49 MB/s"
      - cell "5.3%"
      - cell "62.7 MB"
      - cell "5.5 Mbps"
    - row "Internet Explorer 0.86 MB/s 9.5% 62.8 MB 4.5 Mbps":
      - cell "Internet Explorer"
      - cell "0.86 MB/s"
      - cell "9.5%"
      - cell "62.8 MB"
      - cell "4.5 Mbps"
    - row "Chrome 0.96 MB/s 8.5% 83.7 MB 3.7 Mbps":
      - cell "Chrome"
      - cell "0.96 MB/s"
      - cell "8.5%"
      - cell "83.7 MB"
      - cell "3.7 Mbps"
    - row "System 0.52 MB/s 1.0% 88.4 MB 1.3 Mbps":
      - cell "System"
      - cell "0.52 MB/s"
      - cell "1.0%"
      - cell "88.4 MB"
      - cell "1.3 Mbps"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 8.5%
  - text: "Memory Size of Firefox process:"
  - strong: 62.7 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 3.7 Mbps
  - text: "Disk space of Firefox process:"
  - strong: 0.49 MB/s
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
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const pageUrl = 'https://sdetqa.vercel.app/autoplay.html';
  4  | 
  5  | test.describe('Data Entry Form Validation', () => {
  6  |   test.beforeEach(async ({ page }) => {
  7  |     await page.goto(pageUrl);
  8  |     await expect(page.getByText('AutoPlay')).toBeVisible();
  9  |   });
  10 | 
  11 |   test('1. Page load validation', async ({ page }) => {
  12 |     // 1. Open the URL and verify the page loaded
> 13 |     await expect(page).toHaveURL(pageUrl);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  14 |     // 2. Verify the AutoPlay heading is visible
  15 |     await expect(page.getByText('AutoPlay')).toBeVisible();
  16 |   });
  17 | 
  18 |   test('2. Input fields validation', async ({ page }) => {
  19 |     const nameField = page.getByLabel('Full name');
  20 |     const emailField = page.getByLabel('Email');
  21 |     const phoneField = page.getByLabel('Phone');
  22 |     const addressField = page.getByLabel('Address');
  23 | 
  24 |     // Full name field should be visible and enabled
  25 |     await expect(nameField).toBeVisible();
  26 |     await expect(nameField).toBeEnabled();
  27 | 
  28 |     // Verify maxlength attribute
  29 |     await expect(nameField).toHaveAttribute('maxlength', '15');
  30 | 
  31 |     // Enter and verify full name value
  32 |     await nameField.fill('John Canedy');
  33 |     await expect(nameField).toHaveValue('John Canedy');
  34 | 
  35 |     // Email field should be visible and accept a value
  36 |     await expect(emailField).toBeVisible();
  37 |     await emailField.fill('tester@example.com');
  38 |     await expect(emailField).toHaveValue('tester@example.com');
  39 | 
  40 |     // Phone field should be visible and accept a value
  41 |     await expect(phoneField).toBeVisible();
  42 |     await phoneField.fill('+91 1234567898');
  43 |     await expect(phoneField).toHaveValue('+91 1234567898');
  44 | 
  45 |     // Address field should be visible and accept multi-line text
  46 |     await expect(addressField).toBeVisible();
  47 |     await addressField.fill('123 Xyz Lane\nDelhi, India');
  48 |     await expect(addressField).toHaveValue('123 Xyz Lane\nDelhi, India');
  49 |   });
  50 | 
  51 |   test('3. Radio button validation', async ({ page }) => {
  52 |     const maleRadio = page.getByLabel('Male', { exact: true });
  53 |     const femaleRadio = page.getByLabel('Female', { exact: true });
  54 | 
  55 |     // Locate both radio buttons
  56 |     await expect(maleRadio).toBeVisible();
  57 |     await expect(femaleRadio).toBeVisible();
  58 | 
  59 |     // Select Female and verify
  60 |     await femaleRadio.check();
  61 |     await expect(femaleRadio).toBeChecked();
  62 |     await expect(maleRadio).not.toBeChecked();
  63 |   });
  64 |   
  65 | });
  66 | 
  67 | 
```