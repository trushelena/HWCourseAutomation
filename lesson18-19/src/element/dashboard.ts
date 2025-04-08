import { Page, Locator, expect } from '@playwright/test';

export class DashboardElements {
  constructor(private readonly page: Page) {}


  get createProjectButton(): Locator {
    return this.page.locator('button:has-text("Create new project")');
  }

  get projectNameInput(): Locator {
    return this.page.locator('#project-name');
  }

  get projectCodeInput(): Locator {
    return this.page.locator('#project-code');
  }

  get projectDescriptionInput(): Locator {
    return this.page.locator('#description-area');
  }

  get submitButton(): Locator {
    return this.page.locator('button:has-text("Create project")');
  }

  get projectTitle(): Locator {
    return this.page.locator('h1');
  }


  async clickCreateProject(): Promise<void> {
    await this.createProjectButton.click();
  }

  async fillProjectName(name: string): Promise<void> {
    await this.projectNameInput.fill(name);
  }

  async fillProjectCode(code: string): Promise<void> {
    await this.projectCodeInput.fill(code);
  }

  async fillProjectDescription(description: string): Promise<void> {
    await this.projectDescriptionInput.fill(description);
  }

  async submitProject(): Promise<void> {
    await this.submitButton.click();
  }

  async waitForProjectTitle(): Promise<void> {
    await expect(this.projectTitle).toBeVisible();
  }

  async isProjectTitleVisible(): Promise<boolean> {
    return this.projectTitle.isVisible();
  }
}
