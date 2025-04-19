import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
const RPconfig = {
    apiKey: 'test1_yAcOG7zqQNOZIkmnEN-nnCQZFD8qb0im_O8njl1poYfjWx6-aJrW68GcbYeA3L1n',
    endpoint: 'http://localhost:8080/api/v2',
    project: 'popova-test',
    launch: 'Playwright run',
    attributes: [],
    description: 'playwright run',
    }

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    headless: true,
    actionTimeout: 0,
    navigationTimeout: 15000,
  },
  testDir: './tests',
  reporter: [['@reportportal/agent-js-playwright', RPconfig]],
  timeout: 10000,
});