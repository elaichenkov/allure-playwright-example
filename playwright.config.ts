// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: [
    ['line'], 
    ['experimental-allure-playwright']
  ],
};

export default config;