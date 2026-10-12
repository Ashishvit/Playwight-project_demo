import { test } from '@playwright/test';


test('Vis', async ({ page }) => {
  await page.goto('https://sdetqa.vercel.app/pw-locators-demo-app');
    
  // 1. getByRole() → Finds element by its accessible role
  const loginBtn = page.getByRole('button', { name: 'Login' });
  const heading = page.getByRole('heading', { name: 'Welcome' });


  // 2. getByText() → Finds element by visible text
  const loginText = page.getByText('Login');
  const welcomeText = page.getByText('Welcome Ashish');


  // 3. getByLabel() → Finds form element using its label
  const username = page.getByLabel('Username');
  const password = page.getByLabel('Password');


  // 4. getByPlaceholder() → Finds input using placeholder text
  const userInput = page.getByPlaceholder('Enter username');
  const passInput = page.getByPlaceholder('Enter password');


  // 5. getByTestId() → Finds element using data-testid
  const submit = page.getByTestId('submit-button');
  const email = page.getByTestId('email-input');


  // 6. getByTitle() → Finds element using title attribute
  const closeBtn = page.getByTitle('Close');
  const searchBtn = page.getByTitle('Search');


  // 7. CSS Selector → Uses CSS syntax
  const user = page.locator('#username');
  const button = page.locator('.login-button');


  // 8. XPath → Finds element using XPath expression
  const login = page.locator('//button[text()="Login"]');
  const input = page.locator('//input[@name="username"]');


  // 9. Attribute Selector → Finds element using an attribute
  const emailBox = page.locator('[name="email"]');
  const passwordBox = page.locator('[type="password"]');


  // 10. Tag Selector → Finds element using HTML tag
  const buttons = page.locator('button');
  const inputs = page.locator('input');


  // 11. Class Selector → Finds element using class
  const primaryBtn = page.locator('.btn-primary');
  const usernameField = page.locator('.username');


  // 12. ID Selector → Finds element using ID
  //const login = page.locator('#login');
  const pwd = page.locator('#password');


  // 13. locator() + hasText → Finds element containing specific text
  const loginButton = page.locator('button', { hasText: 'Login' });
  const product = page.locator('div', { hasText: 'Product' });


  // 14. filter() → Filters a group of elements
  const loginBtn2 = page.locator('button').filter({ hasText: 'Login' });

  const productCard = page.locator('div')
    .filter({ hasText: 'Product' });



  // Example action on a locator
  await loginBtn.click();

// getByRole
const item1 = page.getByRole('listitem').filter({ hasText: 'Apple' });

// getByText
const item2 = page.getByText('Apple').filter({ hasText: 'Apple' });

// getByLabel
const item3 = page.getByLabel('Apple').filter({ hasText: 'Apple' });

// getByTestId
const item4 = page.getByTestId('product-list').filter({ hasText: 'Apple' });

// locator
const item5 = page.locator('li').filter({ hasText: 'Apple' });

// CSS locator
const item6 = page.locator('.product').filter({ hasText: 'Apple' });

// XPath locator
const item7 = page.locator('//li').filter({ hasText: 'Apple' });


//filter 
// 1. locator()
page.locator('button').filter({ hasText: 'Login' });

// 2. getByRole()
page.getByRole('button').filter({ hasText: 'Login' });

// 3. getByText()
page.getByText('Login').filter({ hasText: 'Admin' });

// 4. getByLabel()
page.getByLabel('Username').filter({ hasText: 'Admin' });

// 5. getByPlaceholder()
page.getByPlaceholder('Enter username').filter({ hasText: 'Admin' });

// 6. getByAltText()
page.getByAltText('Profile').filter({ hasText: 'Admin' });

// 7. getByTitle()
page.getByTitle('Profile').filter({ hasText: 'Admin' });

// 8. getByTestId()
page.getByTestId('login-button').filter({ hasText: 'Login' });

// 9. Filter with has
page.locator('.product').filter({
  has: page.getByText('iPhone')
});

// 10. Filter with hasText
page.locator('.product').filter({
  hasText: 'iPhone'
});

// 11. Filter with regular expression
page.locator('.product').filter({
  hasText: /iPhone/i
});

// 12. Multiple filters
page.locator('.product')
  .filter({ hasText: 'iPhone' })
  .filter({ hasText: '₹50,000' });

// 13. Filter + getByRole
page.locator('.product')
  .filter({ hasText: 'iPhone' })
  .getByRole('button', { name: 'Add to Cart' })
  .click();

// 14. Filter + first()
page.locator('.product')
  .filter({ hasText: 'iPhone' })
  .first()
  .click();

// 15. Filter + nth()
page.locator('.product')
  .filter({ hasText: 'iPhone' })
  .nth(1)
  .click();

  // 1. has
// Select product that HAS a button with text "Add to Cart"
const product1 = page.locator('.product').filter({
  has: page.getByRole('button', { name: 'Add to Cart' })
});

// Result: iPhone 15, Google Pixel 9


// 2. hasNot
// Select product that does NOT HAVE a button with text "Add to Cart"
const product2 = page.locator('.product').filter({
  hasNot: page.getByRole('button', { name: 'Add to Cart' })
});

// Result: Samsung S24, OnePlus 12


// 3. hasText
// Select product that HAS the text "Samsung S24"
const product3 = page.locator('.product').filter({
  hasText: 'Samsung S24'
});

// Result: Samsung S24


// 4. hasNotText
// Select products that do NOT HAVE the text "Samsung S24"
const product4 = page.locator('.product').filter({
  hasNotText: 'Samsung S24'
});

// Result: iPhone 15, Google Pixel 9, OnePlus 12

page.getByRole('listitem').filter({ hasText: 'Product 2' }).getByRole('button').click();                // Find all <li> elements 
     // Select <li> containing "Product 2"
                    // Find button inside that <li>
                           // Click the button

// Find all list items
const product6 = page.getByRole('listitem').filter({ has: page.getByRole('heading', { name: 'Product 2' }) });

await product6.getByRole('button', { name: 'Add to Cart' }).click();




//const abcd = page.getByRole('listitem').filter({has : page.getByRole('button', {name: 'ad to cart'})});












































































//page.getByRole('listite')










































































































































});