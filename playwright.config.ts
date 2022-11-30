import type { PlaywrightTestConfig, PlaywrightTestOptions, PlaywrightWorkerOptions, Project } from "@playwright/test";
import { devices } from "@playwright/test";

const projects: Project<PlaywrightTestOptions, PlaywrightWorkerOptions>[] = [
  {
    name: 'Mobile Safari',
    testMatch: 'specs/mobile/*.spec.ts',
    use: {
      browserName: 'webkit',
      ...devices['iPhone 12']
    }
  }
];

const config: PlaywrightTestConfig = {
  testDir: "./specs",
  timeout: 30 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    actionTimeout: 0,
    baseURL: "http://localhost:5173/",
    trace: "on-first-retry",
    headless: !!process.env.CI
  },
  projects,
  outputDir: 'test-results/',
  /* Run your local dev server before starting the tests */
  webServer: {
    command: process.env.CI ? 'npm run preview' : 'npm run preview:dev',
    port: 5173,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
