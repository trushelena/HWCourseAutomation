import { BrowserContext, Locator, Page } from '@playwright/test';
import * as fs from 'fs';

export class FopHelpLoginPage {

    private get loginForm(): Locator {
        return this.page.locator('.Login');
    }

    private get emailInput(): Locator {
        return this.page.locator('#email');
    }

    private get passwordInput(): Locator {
        return this.page.locator('#password');
    }

    private get loginButton(): Locator {
        return this.page.locator('.btn-primary');
    }

    public get userLogo(): Locator {
        return this.page.locator('a.text-dark.nav-link[href="/auth/profile"]');
    }

    public constructor(private page: Page, private context: BrowserContext) {}


    public async goto(): Promise<void> {
        await this.page.goto('https://new.fophelp.pro/auth/login');
        await this.loginForm.waitFor();
    }

    public async login(username: string, password: string): Promise<void> {
        await this.goto();
        await this.loginForm.waitFor();

        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

        await this.userLogo.waitFor();

        const browserState = await this.context.storageState();
        fs.writeFileSync('browser-context.json', JSON.stringify(browserState, null, 2));
    }
}
