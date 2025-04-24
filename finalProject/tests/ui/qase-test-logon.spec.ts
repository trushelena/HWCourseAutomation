import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/qase-login.page';
import { DashboardPage } from '../../src/pages/dashboard.page';
import { QasePage } from '../../src/pages/qase.page';

test.describe('Qase user flow: login, create project, open Apps', () => {
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;
    let qasePage: QasePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        qasePage = new QasePage(page);
        await loginPage.goto();
        await loginPage.login('trushelena1996@gmail.com', 'As2688AsTreshsd21$');
    });

    test('Login with valid credentials', async () => {
        await loginPage.waitForUserAvatar();
        await expect(loginPage.userAvatar).toBeVisible();
    });

    test('Create a new project', async () => {

        await dashboardPage.openCreateProject();

        const name = 'Test Project';
        const code = 'TP123';
        const description = 'Created via Playwright';

        await dashboardPage.createNewProject(name, code, description);
        await dashboardPage.waitForProjectTitle();

        const projectTitle = await dashboardPage.getProjectTitleText();
        expect(projectTitle).toBe(name);

    });

    test('Navigate to Apps tab', async () => {

        await expect(qasePage.menuContainer).toBeVisible({ timeout: 10000 });
        await qasePage.openAppsSection();
        await expect(qasePage.pageHeader).toHaveText(/Apps/i);
    });
});
