import { test, expect } from '@playwright/test';
import { FopHelpLoginPage } from 'src/pages/fophelp-login.page';

test.describe('FopHelp Login Tests', () => {
    let loginPage: FopHelpLoginPage;

    test.beforeEach(async ({ page, context }) => {
        loginPage = new FopHelpLoginPage(page, context);
    });

    test('should login with valid credentials', async () => {
        const validUsername = 'trushelena1996@gmail.com';
        const validPassword = 'Treshsd21$';

        await loginPage.login(validUsername, validPassword);

        const userLogo = loginPage.userLogo;
        await expect(userLogo).toBeVisible();
    });
});
