// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    screenshot: 'only-on-failure'
  },
  reporter: [
    ['line'], 
    ['allure-playwright']
  ],
};

export default config;