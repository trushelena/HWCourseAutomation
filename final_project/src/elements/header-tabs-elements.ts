import { Locator, Page } from '@playwright/test';

export class QaseHeaderMenuElement {
  constructor(private readonly page: Page) {}

  get menuContainer(): Locator {
    return this.page.locator('nav[aria-label="Main navigation"]');
  }

  get headerTabs(): Locator {
    return this.menuContainer.locator('a:visible');
  }

  get pageHeader(): Locator {
    return this.page.locator('h1');
  }


  public async getHeaderMenuNames(): Promise<string[]> {
    const menuItems = await this.headerTabs.all();
    const menuNames: string[] = [];
  
    for (const item of menuItems) {
      const text = await item.textContent();
      menuNames.push(text?.trim() ?? '');
    }
  
    return menuNames;
  }

  public async selectMenu(menuName: string): Promise<void> {
    const menuItems = await this.headerTabs.all();
  
    for (const item of menuItems) {
      const text = await item.textContent();
      const cleaned = text?.trim() ?? '';
  
      if (cleaned.toLowerCase() === menuName.trim().toLowerCase()) {
        await Promise.all([
          item.click(),
        ]);
        return;
      }
    }
  
    throw new Error(`Menu item with name '${menuName}' not found.`);
  }
}