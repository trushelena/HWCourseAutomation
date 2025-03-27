import { test, expect } from '@playwright/test';
import { LoginPage } from 'src/pages/qase-login.page';


test.describe('Тести логіну', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Успішний вхід', async () => {
        await loginPage.login('trushelena1996@gmail.com', 'As2688AsTreshsd21$');
        await expect(loginPage.page).toHaveURL('https://app.qase.io/projects');
    });

    test('Помилка при порожньому логіні', async () => {
        await loginPage.login('', 'somePassword');
        await loginPage.expectErrorMessage('This field is required');
    });

    test('Перенаправлення на сторінку відновлення пароля', async () => {
        await loginPage.clickForgotPassword();
        await expect(loginPage.page).toHaveURL('https://app.qase.io/password/reset');
    });
});
