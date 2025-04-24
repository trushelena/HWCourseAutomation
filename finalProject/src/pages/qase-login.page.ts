import { Locator, Page } from '@playwright/test';
import { LoginFormElement } from '../element/login-form';

export class LoginPage {

    private readonly form: LoginFormElement;

    public constructor(private readonly page: Page)  {
        this.page = page;
        this.form = new LoginFormElement(page);
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://app.qase.io/login');
        await this.page.waitForLoadState('domcontentloaded');
        await this.form.usernameInput.waitFor({ state: 'visible' });
    }

    public async login(username: string, password: string): Promise<void>  {
        await this.form.fillUsername(username);
        await this.form.fillPassword(password);
        await this.form.clickLoginButton();
    }

    public async waitForUserAvatar(): Promise<void>  {
        await this.form.waitForUserAvatar();
    }

    public get userAvatar(): Locator{
        return this.form.userAvatar;
    }
}
