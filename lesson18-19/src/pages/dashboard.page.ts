import { Page } from '@playwright/test';
import { DashboardElements } from '../element/dashboard';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
  private readonly elements: DashboardElements;

  constructor(page: Page) {
    super(page);
    this.elements = new DashboardElements(page);
  }

  async openCreateProject(): Promise<void> {
    await this.elements.clickCreateProject();
  }

  async createNewProject(name: string, code: string, description = ''): Promise<void> {
    await this.elements.fillProjectName(name);
    await this.elements.fillProjectCode(code);
    await this.elements.fillProjectDescription(description);
    await this.elements.submitProject();
  }

  async waitForProjectTitle(): Promise<void> {
    await this.elements.waitForProjectTitle();
  }

  async isProjectTitleVisible(): Promise<boolean> {
    return this.elements.isProjectTitleVisible();
  }
}
