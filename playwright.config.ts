import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },
  // Untagged tests run everywhere; @desktop / @mobile tests only run on matching projects
  projects: [
    { name: 'desktop', grepInvert: /@mobile/, use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile-chrome', grepInvert: /@desktop/, use: { ...devices['Pixel 7'] } },
    // Needs WebKit system libs: `sudo pnpm exec playwright install-deps webkit`
    { name: 'mobile-safari', grepInvert: /@desktop/, use: { ...devices['iPhone 14'] } },
  ],
  // Test the built static site, not the dev server
  webServer: {
    command: 'pnpm build && pnpm preview',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
