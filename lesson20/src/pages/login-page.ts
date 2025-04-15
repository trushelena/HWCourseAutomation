import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public get usernameInput(): Locator {
        return this.page.locator('[name="email"]');
    }

    public get passwordInput(): Locator {
        return this.page.locator('[name="password"]');
    }

    public get loginButton(): Locator {
        return this.page.locator('button[type="submit"]');
    }

    public get userAvatar(): Locator {
        return this.page.locator('.vpRdsE');
    }

    public get errorMessage(): Locator {
        return this.page.locator('.f75Cb_');
    }

    public get forgotPasswordLink(): Locator {
        return this.page.locator('.Zl9WW_');
    }

    public get forgotPageLabel(): Locator {
        return this.page.locator('.NsFoEI');
    }
    public get forgotPasswordEmailInput(): Locator {
        return this.page.locator('.wBsjbV');
    }

    public get resetPasswordButton(): Locator {
        return this.page.locator('button[type="submit"]');
    }

    public get successMessage(): Locator {
        return this.page.locator('.xtWHgv');
    }

    public get userNotFoundPopup(): Locator {
        return this.page.locator('.JUlrXi');
    }

    public async goto() {
        await this.page.goto('https://app.qase.io/login');
        await this.page.waitForLoadState('domcontentloaded');
        await this.usernameInput.waitFor({ state: 'visible' });
    }

    public async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    }

    public async expectErrorMessage(errorText: string) {
        await expect(this.errorMessage).toHaveText(errorText);
    }

    public async clickForgotPassword() {
        await this.forgotPasswordLink.click();
        await this.forgotPageLabel.waitFor();

    }

    public async resetPassword(email: string) {
        await this.forgotPasswordEmailInput.fill(email);
        await this.resetPasswordButton.click();
    }

    public async expectSuccessMessage(successText: string) {
        await expect(this.successMessage).toHaveText(successText);
    }

    public async expectNotFoundMessage(notFoundMessage: string) {
        await expect(this.userNotFoundPopup).toHaveText(notFoundMessage);
    }
}
