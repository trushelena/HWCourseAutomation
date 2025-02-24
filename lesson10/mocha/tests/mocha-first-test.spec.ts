import { expect } from 'chai';
import { describe, it } from 'mocha';
import { DepositAccount, SavingsAccount } from 'src/abstraction';

let savingsAccount: SavingsAccount;
let depositAccount: DepositAccount;

describe('BankAccount Tests', function () {
    beforeEach(function () {
        savingsAccount = new SavingsAccount('John Doe', 1000);
        depositAccount = new DepositAccount('Jane Doe', 2000, 5);
    });

    // Tests for SavingsAccount
    describe('SavingsAccount', function () {
        it('should initialize with correct values', function () {
            expect(savingsAccount.getBalance()).to.equal(1000);
        });

        it('should increase balance when depositing money', function () {
            savingsAccount.deposit(500);
            expect(savingsAccount.getBalance()).to.equal(1500);
        });

        it('should decrease balance when withdrawing money', function () {
            savingsAccount.withdraw(200);
            expect(savingsAccount.getBalance()).to.equal(800);
        });

        it('should return the same balance after an attempted withdrawal', function () {
            const initialBalance = depositAccount.getBalance();
            const returnValue = depositAccount.withdraw();
            expect(returnValue).to.equal(initialBalance);
        });
    });

    // Tests for DepositAccount
    describe('DepositAccount', function () {
        it('should initialize with correct values', function () {
            expect(depositAccount.getBalance()).to.equal(2000);
        });

        it('should increase balance when depositing money', function () {
            depositAccount.deposit(1000);
            expect(depositAccount.getBalance()).to.equal(3000);
        });

        it('should not allow withdrawing money', function () {
            depositAccount.withdraw();
            expect(depositAccount.getBalance()).to.equal(2000);
        });

        it('should correctly apply interest', function () {
            depositAccount.applyInterest();
            expect(depositAccount.getBalance()).to.equal(2100);
        });
    });
});
