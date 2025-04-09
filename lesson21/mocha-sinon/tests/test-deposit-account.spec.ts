import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import { DepositAccount } from 'src/abstraction';


describe('Deposit Account Tests with Mocks', () => {
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
        account.getBalance();

        accountMock.verify();
    });
});
