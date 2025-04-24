import { Page, Locator, expect } from '@playwright/test';

export class DashboardElement {
    public constructor(private readonly page: Page) {}


    private get createProjectButton(): Locator {
        return this.page.locator('button:has-text("Create new project")');
    }

    private get projectNameInput(): Locator {
        return this.page.locator('#project-name');
    }

    private get projectCodeInput(): Locator {
        return this.page.locator('#project-code');
    }

    private get projectDescriptionInput(): Locator {
        return this.page.locator('#description-area');
    }

    private get submitButton(): Locator {
        return this.page.locator('button:has-text("Create project")');
    }

    private get projectTitle(): Locator {
        return this.page.locator('.E5RRRH');
    }


    public async clickCreateProject(): Promise<void> {
        await this.createProjectButton.click();
    }

    public async fillProjectName(name: string): Promise<void> {
        await this.projectNameInput.fill(name);
    }

    public async fillProjectCode(code: string): Promise<void> {
        await this.projectCodeInput.fill(code);
    }

    public async fillProjectDescription(description: string): Promise<void> {
        await this.projectDescriptionInput.fill(description);
    }

    public async submitProject(): Promise<void> {
        await this.submitButton.click();
    }

    public async waitForProjectTitle(): Promise<void> {
        await expect(this.projectTitle).toBeVisible();
    }

    public async isProjectTitleVisible(): Promise<boolean> {
        return this.projectTitle.isVisible();
    }

    public async getProjectTitleText(): Promise<string> {
        const title = await this.projectTitle.textContent();
        return title?.trim() || '';
    }
}

