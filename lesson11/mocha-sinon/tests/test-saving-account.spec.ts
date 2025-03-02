import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import { SavingsAccount } from 'src/abstraction';


describe('SavingAccount Tests with Mocks', () => {
    it('should deposit money into SavingsAccount', function () {
        const account = new SavingsAccount('Test Owner', 1000);
        const accountMock = sinon.mock(account);
        const amount = 500;

        accountMock.expects('deposit').once().withArgs(amount);
        accountMock.expects('getBalance').returns(1500);

        account.deposit(amount);
        account.getBalance();

        accountMock.verify();
    });

    it('should withdraw money from SavingsAccount', function () {
        const account = new SavingsAccount('Olena', 1000);
        const accountMock = sinon.mock(account);
        const amount = 200;

        accountMock.expects('withdraw').once().withArgs(amount);
        accountMock.expects('getBalance').returns(800);

        account.withdraw(amount);
        account.getBalance();

        accountMock.verify();

    });

    it('should not allow negative deposit', function () {
        const account = new SavingsAccount('Olena', 1000);
        const accountMock = sinon.mock(account);

        accountMock.expects('deposit').once().throws(new Error('Negative deposit not allowed'));

        expect(() => account.deposit(-100)).to.throw('Negative deposit not allowed');
    }
    );
});
