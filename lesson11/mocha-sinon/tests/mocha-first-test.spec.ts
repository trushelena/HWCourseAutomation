import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import { DepositAccount, SavingsAccount } from 'src/abstraction';

describe('BankService Tests with Mocks', () => {
    it('should deposit money into SavingsAccount', function () {
        const account = new SavingsAccount('Test Owner', 1000);
        const accountMock = sinon.mock(account);
        const amount = 500;

        accountMock.expects('deposit').once().withArgs(amount);
        accountMock.expects('getBalance').returns(1500);

        account.deposit(amount);
        const newBalance = account.getBalance();

        accountMock.verify();
        expect(newBalance).to.equal(1500);
    });

    it('should withdraw money from SavingsAccount', function () {
        const account = new SavingsAccount('Olena', 1000);
        const accountMock = sinon.mock(account);
        const amount = 200;

        accountMock.expects('withdraw').once().withArgs(amount);
        accountMock.expects('getBalance').returns(800);

        account.withdraw(amount);
        const newBalance = account.getBalance();

        accountMock.verify();
        expect(newBalance).to.equal(800);
    });

    it('should prevent withdrawal from DepositAccount', function () {
        const account = new DepositAccount('Olena', 2000, 5);
        const accountMock = sinon.mock(account);
        accountMock.expects('withdraw').throws(new Error('Withdrawals not allowed'));

        expect(() => account.withdraw()).to.throw('Withdrawals not allowed');
        accountMock.verify();
    });

    it('should apply interest to DepositAccount', function () {
        const account = new DepositAccount('Olena', 2000, 5);
        const accountMock = sinon.mock(account);
        accountMock.expects('applyInterest').once();
        accountMock.expects('getBalance').returns(2100);

        account.applyInterest();
        const newBalance = account.getBalance();

        accountMock.verify();
        expect(newBalance).to.equal(2100);
    });

    it('should not allow negative deposit', function () {
        const account = new SavingsAccount('Olena', 1000);
        const accountMock = sinon.mock(account);

        accountMock.expects('deposit').once().throws(new Error('Negative deposit not allowed'));

        expect(() => account.deposit(-100)).to.throw();
        accountMock.verify();
    });
});
