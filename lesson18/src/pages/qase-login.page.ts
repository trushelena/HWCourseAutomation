/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    public readonly page: Page;
    public readonly usernameInput: Locator;
    public readonly passwordInput: Locator;
    public readonly loginButton: Locator;
    public readonly errorMessage: Locator;
    public readonly forgotPasswordLink: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('//*[@name="email"]');
        this.passwordInput = page.locator('//*[@name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('.f75Cb_');
        this.forgotPasswordLink = page.locator('.Zl9WW_');
    }

    public async goto() {
        await this.page.goto('https://app.qase.io/login');
    }

    public async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    public async expectErrorMessage(errorText: string) {
        await expect(this.errorMessage).toHaveText(errorText);
    }
    public async clickForgotPassword () {
        await this.forgotPasswordLink.click();
    }
}
