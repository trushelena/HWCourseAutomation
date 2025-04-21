import { test } from '@playwright/test';
import { TransactionForm } from '../../src/pages/transaction-form.page';

test('Додавання транзакції', async ({ page }) => {
    await page.goto('https://new.fophelp.pro/incomes');
    const transactionForm = TransactionForm.create(page, 'income');

    await transactionForm.addTransaction(); // Натискання на кнопку "Додати транзакцію"

    // Перевіряємо, що форма додана успішно (зробіть відповідні перевірки, якщо необхідно)
});

test('Заповнення та відправлення форми', async ({ page }) => {
    const transactionForm = TransactionForm.create(page, 'income');

    const testData = {
        date: '2025-04-21',
        amount: '100',
        currency: 'USD',
        comment: 'Test income'
    };

    await transactionForm.fillForm(testData.date, testData.amount, testData.currency, testData.comment);
    await transactionForm.submitForm();

});

test('Видалення форми', async ({ page }) => {
    const transactionForm = TransactionForm.create(page, 'income');

    await transactionForm.removeForm();


});
