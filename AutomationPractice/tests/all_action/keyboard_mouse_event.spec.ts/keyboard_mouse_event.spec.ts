import { test, expect } from '@playwright/test';

test('Mouse and Keyboard Handling', async ({ page }) => {

    await page.goto('https://example.com');

    // =====================================================
    // 🖱️ MOUSE HANDLING
    // =====================================================

    // 1. Click
    await page.getByRole('button', { name: 'Submit' }).click();

    // 2. Double Click
    await page.locator('#item').dblclick();

    // 3. Right Click
    await page.locator('#item').click({ button: 'right' });

    // 4. Middle Click
    await page.locator('#item').click({ button: 'middle' });

    // 5. Hover
    await page.locator('#menu').hover();

    // 6. Drag and Drop
    await page.locator('#source').dragTo(page.locator('#target'));

    // 7. Mouse Move
    await page.locator('#menu').hover();
    // Moves mouse over the locator

    // 8. Mouse Down
    await page.locator('#slider').hover();
    await page.mouse.down();

    // 9. Mouse Up
    await page.mouse.up();

    // 10. Mouse Wheel / Scroll
    await page.mouse.wheel(0, 500);

    // 11. Click with Shift
    await page.locator('#item').click({ modifiers: ['Shift'] });

    // 12. Click with Control
    await page.locator('#item').click({ modifiers: ['Control'] });

    // 13. Click with Alt
    await page.locator('#item').click({ modifiers: ['Alt'] });


    // =====================================================
    // ⌨️ KEYBOARD HANDLING
    // =====================================================

    const username = page.locator('#username');
    const email = page.locator('#email');

    // 1. Fill
    await username.fill('Ashish');

    // 2. Press a single key
    await username.press('Enter');

    // 3. Copy
    await username.press('Control+A');
    await username.press('Control+C');

    // 4. Paste
    await email.press('Control+V');

    // 5. Press Sequentially
    await username.pressSequentially('Ashish');

    // 6. Key Down
    await username.focus();
    await page.keyboard.down('Shift');

    // 7. Key Up
    await page.keyboard.up('Shift');

    // 8. Enter
    await username.press('Enter');

    // 9. Tab
    await username.press('Tab');

    // 10. Escape
    await page.keyboard.press('Escape');

    // 11. Arrow Up
    await page.keyboard.press('ArrowUp');

    // 12. Arrow Down
    await page.keyboard.press('ArrowDown');

    // 13. Arrow Left
    await page.keyboard.press('ArrowLeft');

    // 14. Arrow Right
    await page.keyboard.press('ArrowRight');

    // 15. Backspace
    await username.press('Backspace');

    // 16. Delete
    await username.press('Delete');

    // 17. Home
    await username.press('Home');

    // 18. End
    await username.press('End');

    // 19. Select All
    await username.press('Control+A');

    // 20. Copy
    await username.press('Control+C');

    // 21. Cut
    await username.press('Control+X');

    // 22. Paste
    await username.press('Control+V');

    // 23. Type using keyboard
    await page.keyboard.type('Hello');

    // 24. Press keyboard key globally
    await page.keyboard.press('Enter');

    // 25. Key down + type + key up
    await page.keyboard.down('Shift');
    await page.keyboard.press('A');
    await page.keyboard.up('Shift');
});