import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/qase-login.page';

test.describe('Login Page', () => {
  
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);  // ініціалізація сторінки
    await loginPage.goto();  // Перехід на сторінку логіну
  });

  test('should login successfully with valid credentials', async () => {
    // Виконуємо логін
    await loginPage.login('trushelena1996@gmail.com', 'As2688AsTreshsd21$');
    await loginPage.waitForUserAvatar();
    await expect(loginPage.userAvatar).toBeVisible();
  });
});
