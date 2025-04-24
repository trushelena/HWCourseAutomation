import { Page, expect } from '@playwright/test';

export class BasePage {
    protected page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public async goto(url: string): Promise<void> {
        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded');
    }

    public async getTitle(): Promise<string> {
        return this.page.title();
    }

    public async waitForHeader(locator: string | RegExp): Promise<void> {
        await expect(this.page.locator('h1')).toHaveText(locator);
    }
}
