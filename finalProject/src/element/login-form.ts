import { Locator, Page } from '@playwright/test';

export class LoginFormElement {
    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public get usernameInput(): Locator {
        return this.page.locator('[name="email"]');
    }

    private get passwordInput(): Locator {
        return this.page.locator('[name="password"]');
    }

    private get loginButton(): Locator {
        return this.page.locator('button[type="submit"]');
    }

    public get userAvatar(): Locator {
        return this.page.locator('.vpRdsE');
    }

    public async fillUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    public async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    public async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    public async waitForUserAvatar(): Promise<void> {
        await this.userAvatar.waitFor({ state: 'visible' });
    }
}
