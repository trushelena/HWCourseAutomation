import { SavingsAccount, DepositAccount } from './abstraction';

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
myDeposit.withdraw(300);
