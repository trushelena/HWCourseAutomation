import { expect } from 'chai';
import { describe, it } from 'mocha';
import { DepositAccount, SavingsAccount } from 'src/abstraction';

describe('BankAccount Tests', function () {
    // Tests for SavingsAccount
    describe('SavingsAccount', function () {
        it('should initialize with correct values', function () {
            const account = new SavingsAccount('John Doe', 1000);

            const balance = account.getBalance();

            expect(balance).to.equal(1000);
        });

        it('should increase balance when depositing money', function () {
            const account = new SavingsAccount('John Doe', 1000);
            const amountToDeposit = 500;

            account.deposit(amountToDeposit);
            const newBalance = account.getBalance();

            expect(newBalance).to.equal(1500);
        });

        it('should decrease balance when withdrawing money', function () {
            const account = new SavingsAccount('John Doe', 1000);
            const amountToWithdraw = 200;

            account.withdraw(amountToWithdraw);
            const newBalance = account.getBalance();

            expect(newBalance).to.equal(800);
        });
    });

    // Tests for DepositAccount
    describe('DepositAccount', function () {
        it('should initialize with correct values', function () {
            const account = new DepositAccount('Jane Doe', 2000, 5);

            const balance = account.getBalance();

            expect(balance).to.equal(2000);
        });

        it('should increase balance when depositing money', function () {
            const account = new DepositAccount('Jane Doe', 2000, 5);
            const amountToDeposit = 1000;

            account.deposit(amountToDeposit);
            const newBalance = account.getBalance();

            expect(newBalance).to.equal(3000);
        });

        it('should not allow withdrawing money', function () {
            const account = new DepositAccount('Jane Doe', 2000, 5);
            const initialBalance = account.getBalance();

            account.withdraw();
            const newBalance = account.getBalance();

            expect(newBalance).to.equal(initialBalance);
        });

        it('should correctly apply interest', function () {
            const account = new DepositAccount('Jane Doe', 2000, 5);
            const expectedBalance = 2100;

            account.applyInterest();
            const newBalance = account.getBalance();

            expect(newBalance).to.equal(expectedBalance);
        });
    });
});
