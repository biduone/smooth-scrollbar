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
    expect: {
        timeout: 5000,
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: process.env.CI ? 'github' : 'list',
    use: {
        actionTimeout: 0,
        baseURL: "http://localhost:3000/",
        trace: "on-first-retry",
    },

    projects,

    /* Folder for test artifacts such as screenshots, videos, traces, etc. */
    // outputDir: 'test-results/',

    /* Run your local dev server before starting the tests */
    webServer: {
        command: "npm run start",
        port: 3000,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
};

export default config;
