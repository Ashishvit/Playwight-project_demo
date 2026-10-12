
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Retry failed tests 2 times
  retries: 1,

  // Run 2 workers in parallel
  workers: 1,

  // Prevent test.only in CI
  forbidOnly: !!process.env.CI,

  // Allure reporting
  reporter: 'allure-playwright',

  // Common settings
  use: {
    headless: true,
    storageState: 'cookies_file/user.json',

    // Screenshots, videos, and traces
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',


    // Timeouts
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  // Test timeout
  timeout: 30000,

  // Assertion timeout
  expect: {
    timeout: 5000,
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },

    /*{
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 },
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 },
      },
    },*/
  ],
});
