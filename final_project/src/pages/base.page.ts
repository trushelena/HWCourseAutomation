import { Page, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
  
  async waitForElementVisible(locator: string | RegExp): Promise<void> {
    await expect(this.page.locator('h1')).toHaveText(locator);
  }
}
