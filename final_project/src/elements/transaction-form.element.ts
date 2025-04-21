import { Locator, Page } from '@playwright/test';

export class TransactionFormElements {
    private page: Page;
    private pageType: 'income' | 'expense';
    public constructor(page: Page, pageType: 'income' | 'expense') {
        this.page = page;
        this.pageType = pageType;
    }

    // Getter for the date input field
    public get dateInput(): Locator {
        return this.page.locator('#Date-New');
    }

    public get addTransactionButton(): Locator {
        return this.page.locator('button.MuiIconButton-colorPrimary');
    }

    public get amountInput(): Locator {
        if (this.pageType === 'income') {
            return this.page.locator('#Income-New');
        } else {
            return this.page.locator('#Expense-New');
        }
    }

    public get currencySelect(): Locator {
        return this.page.locator('#Currency-New');
    }

    public get commentInput(): Locator {
        return this.page.locator('#Comment-New');
    }

    public get isCash(): Locator {
        return this.page.locator('#Cash-New');
    }

    public get saveButton(): Locator {
        return this.page.locator('#BtnAdd-New');
    }

    public get cancelButton(): Locator {
        return this.page.locator('#BtnCancel-New');
    }
}
