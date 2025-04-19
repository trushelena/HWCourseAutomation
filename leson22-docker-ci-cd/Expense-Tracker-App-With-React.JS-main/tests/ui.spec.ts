import { test, expect } from '@playwright/test';

test('correct title displayed on the homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Expense Tracker/i);
});

test('check visibility of "Add Transaction" button', async ({ page }) => {
    await page.goto('/');
    const addTransactionButton = page.locator('button', { hasText: /add transaction/i });
    await expect(addTransactionButton).toBeVisible();
});

test('input field for transaction amount is present', async ({ page }) => {
    await page.goto('/');
    const amountInput = page.locator('#transactionamount');
    await expect(amountInput).toBeVisible();
});

test('able to enter amount into the transaction input field', async ({ page }) => {
    await page.goto('/');
    const transactionDetailsInput = page.locator('#description');
    await transactionDetailsInput.fill('test popova');
    
    const amountInput = page.locator('#transactionamount');
    await amountInput.fill('100');

    const addTransactionButton = page.locator('button', { hasText: /add transaction/i });
    await addTransactionButton.click();
    
    const currentBalance = page.locator('#balance');
    await expect(currentBalance).toHaveText(/100/);
});
