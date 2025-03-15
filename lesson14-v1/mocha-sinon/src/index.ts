import { SavingsAccount, DepositAccount } from './abstraction';
import { getJson } from './fetch-api';
import { UserSummary } from './user-summary';

const mySavings = new SavingsAccount('Olena Popova', 500);
const myDeposit = new DepositAccount('Olena Popova', 1000, 4.5);
console.log('Saving Account:');
mySavings.displayInfo();
mySavings.deposit(200);
console.log(`After deposit: ${mySavings.getBalance()} UAH`);
mySavings.withdraw(100);
console.log(`After withdrawal: ${mySavings.getBalance()} UAH`);
console.log('Deposit Account:');
myDeposit.displayInfo();
myDeposit.applyInterest();
console.log(`After interest: ${myDeposit.getBalance()} UAH`);
myDeposit.withdraw();


(async () => {
    const data = await getJson();
    console.log('Selected user:');
    console.log(data.results[0]);

    const userSummary = new UserSummary(data.results[0]);
    console.log('User Summary:');
    console.log(userSummary.getSummary());

})();
