import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { QaseHeaderMenuElement } from '../element/header-tabs-elements';

export class QasePage extends BasePage {
  private readonly _headerMenu: QaseHeaderMenuElement;

  constructor(page: Page) {
    super(page);
    this._headerMenu = new QaseHeaderMenuElement(page);
  }

  get headerMenu(): QaseHeaderMenuElement {
    return this._headerMenu;
  }

  get menuContainer() {
    return this.headerMenu.menuContainer;
  }

  get pageHeader() {
    return this.headerMenu.pageHeader;
  }

  async openAppsSection(): Promise<void> {
    await this.headerMenu.selectMenu('Apps');
    await expect(this.pageHeader).toHaveText(/Apps/i);
  }
}
