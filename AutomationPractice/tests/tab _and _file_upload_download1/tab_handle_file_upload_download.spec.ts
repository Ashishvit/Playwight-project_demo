
import { test, expect } from '@playwright/test';

test('Parent Child Multiple Tabs', async ({ browser }) => {

  // =========================
  // PARENT PAGE
  // =========================
  const context = await browser.newContext();

  const parent = await context.newPage();

  await parent.goto('https://example.com');

  console.log('Parent:', await parent.title());


  // =========================
  // PARENT → CHILD 1
  // =========================
  const [child1] = await Promise.all([
    context.waitForEvent('page'),
    parent.getByText('Open Child 1').click()
  ]);

  await child1.waitForLoadState();

  console.log('Child 1:', await child1.title());


  // =========================
  // PARENT → CHILD 2
  // =========================
  const [child2] = await Promise.all([
    context.waitForEvent('page'),
    parent.getByText('Open Child 2').click()
  ]);

  await child2.waitForLoadState();

  console.log('Child 2:', await child2.title());


  // =========================
  // CHILD 2 → CHILD 2.1
  // =========================
  const [child2_1] = await Promise.all([
    context.waitForEvent('page'),
    child2.getByText('Open Child 2.1').click()
  ]);

  await child2_1.waitForLoadState();

  console.log('Child 2.1:', await child2_1.title());


  // =========================
  // CHILD 2 → CHILD 2.2
  // =========================
  const [child2_2] = await Promise.all([
    context.waitForEvent('page'),
    child2.getByText('Open Child 2.2').click()
  ]);

  await child2_2.waitForLoadState();

  console.log('Child 2.2:', await child2_2.title());


  // =========================
  // SWITCH TO ANY PAGE
  // =========================

  // Parent
  await parent.bringToFront();
  console.log('Now on Parent:', await parent.title());


  // Child 1
  await child1.bringToFront();
  console.log('Now on Child 1:', await child1.title());


  // Child 2
  await child2.bringToFront();
  console.log('Now on Child 2:', await child2.title());


  // Child 2.1
  await child2_1.bringToFront();
  console.log('Now on Child 2.1:', await child2_1.title());


  // Child 2.2
  await child2_2.bringToFront();
  console.log('Now on Child 2.2:', await child2_2.title());


  // =========================
  // CUSTOM SWITCH
  // =========================

  const pages = {
    parent,
    child1,
    child2,
    child2_1,
    child2_2
  };

  // Example: dynamically switch to child2_1
  const pageName = 'child2_1';

  await pages[pageName].bringToFront();

  console.log(
    'Switched to:',
    pageName,
    await pages[pageName].title()
  );
});
