import { Page } from '@playwright/test';
import { DashboardElement } from '../element/dashboard';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
    private readonly elements: DashboardElement;

    public constructor(page: Page) {
        super(page);
        this.elements = new DashboardElement(page);
    }

    public async openCreateProject(): Promise<void> {
        await this.elements.clickCreateProject();
    }

    public async createNewProject(name: string, code: string, description = ''): Promise<void> {
        await this.elements.fillProjectName(name);
        await this.elements.fillProjectCode(code);
        await this.elements.fillProjectDescription(description);
        await this.elements.submitProject();
    }

    public async waitForProjectTitle(): Promise<void> {
        await this.elements.waitForProjectTitle();
    }

    public async isProjectTitleVisible(): Promise<boolean> {
        return this.elements.isProjectTitleVisible();
    }
}
