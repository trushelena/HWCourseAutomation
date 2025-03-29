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
        await expect(loginPage.userAvatar).toBeVisible();
    });

    test('Помилка при порожньому логіні', async () => {
        await loginPage.login('', 'somePassword');
        await loginPage.expectErrorMessage('This field is required');
    });

    test('Перенаправлення на сторінку відновлення пароля', async () => {
        await loginPage.clickForgotPassword();
        await expect(loginPage.forgotPageLabel).toBeVisible();
    });

    test('Відновлення пароля з правильною електронною поштою', async () => {
        await loginPage.clickForgotPassword();
        await loginPage.resetPassword('trushelena1996@gmail.com');
        await loginPage.expectSuccessMessage('We have e-mailed your password reset link!');
    });

    test('Відновлення пароля з незареєстрованим юзером', async () => {
        await loginPage.clickForgotPassword();
        await loginPage.resetPassword('jshea@ingo.me');
        await loginPage.expectNotFoundMessage('User not found.');
    });

    test('Помилка при відновленні пароля без введеного email', async () => {
        await loginPage.clickForgotPassword();
        await loginPage.resetPassword('');
        await loginPage.expectErrorMessage('This field is required');
    });
});
