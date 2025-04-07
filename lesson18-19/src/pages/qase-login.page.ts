import { Page } from '@playwright/test';
import { LoginFormElements } from '../element/login-form';

export class LoginPage {
  private readonly page: Page;
  private readonly form: LoginFormElements;

  public constructor(page: Page) {
    this.page = page;
    this.form = new LoginFormElements(page); // Використовуємо елементи на сторінці
  }

  // Перехід на сторінку логіну
  public async goto() {
    await this.page.goto('https://app.qase.io/login');
    await this.page.waitForLoadState('domcontentloaded');
    await this.form.usernameInput.waitFor({ state: 'visible' });
  }

  // Логін
  public async login(username: string, password: string) {
    await this.form.fillUsername(username);
    await this.form.fillPassword(password);
    await this.form.clickLoginButton();
  }

  // Перевірка, що аватар користувача став видимим після успішного логіну
  public async waitForUserAvatar() {
    await this.form.waitForUserAvatar();
  }
// Геттер для доступу до елемента аватару користувача
public get userAvatar() {
    return this.form.userAvatar;
  }
}
