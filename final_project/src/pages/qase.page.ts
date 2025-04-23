import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { QaseHeaderMenuElement } from '../elements/header-tabs-elements';

export class QasePage extends BasePage {
    private readonly _headerMenu: QaseHeaderMenuElement;

    public constructor(page: Page) {
        super(page);
        this._headerMenu = new QaseHeaderMenuElement(page);
    }

    public get headerMenu(): QaseHeaderMenuElement {
        return this._headerMenu;
    }

    public get menuContainer(): any {
        return this.headerMenu.menuContainer;
    }

    public get pageHeader(): any {
        return this.headerMenu.pageHeader;
    }

    public async openAppsSection(): Promise<void> {
        await this.headerMenu.selectMenu('Apps');
        await expect(this.pageHeader).toHaveText(/Apps/i);
    }
}
