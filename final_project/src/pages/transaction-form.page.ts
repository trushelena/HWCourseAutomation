import { Page } from '@playwright/test';
import { TransactionFormElements } from 'src/elements/transaction-form.element'; // Ensure correct import

export class TransactionForm {
    private elements: TransactionFormElements;

    // Private constructor to enforce using the factory method
    public constructor(private page: Page, pageType: 'income' | 'expense') {
        this.elements = new TransactionFormElements(page, pageType); // Correctly instantiate TransactionFormElements
    }

    // Static factory method to create an instance of TransactionForm
    public static create(page: Page, pageType: 'income' | 'expense'): TransactionForm {
        return new TransactionForm(page, pageType); // This allows us to create instances with a pageType
    }

    public async addTransaction():Promise<void> {
        await this.elements.addTransactionButton.click();
    }

    // Fill the form with provided data
    public async fillForm(date: string, amount: string, currency: string, comment: string): Promise<void> {
        await this.elements.dateInput.fill(date);
        await this.elements.amountInput.fill(amount); // This will fill either "income" or "expense"
        await this.elements.currencySelect.selectOption({ label: currency });
        await this.elements.commentInput.fill(comment);
    }

    // Submit the form
    public async submitForm(): Promise<void> {
        await this.elements.saveButton.click();
    }

    // Remove the form
    public async removeForm(): Promise<void> {
        await this.elements.cancelButton.click(); // Fixed the typo: removed extra "ButtonButton"
    }
}
