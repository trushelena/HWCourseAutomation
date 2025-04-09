export abstract class BankAccount {
    protected owner: string;
    protected balance: number;

    public constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    }

    public abstract deposit(amount: number): number;
    public abstract withdraw(amount: number): number;

    public getBalance(): number {
        return this.balance;
    }

    public displayInfo(): void {
        console.log(`Account Owner: ${this.owner}, Balance: ${this.balance} USD`);
    }
}

export class SavingsAccount extends BankAccount {
    public constructor(owner: string, balance: number) {
        super(owner, balance);
    }

    public deposit(amount: number): number {
        this.balance += amount;
        return this.balance;
    }
    public withdraw(amount: number): number {
        if (amount > this.balance) {
            console.log('Not enough money!');
            return this.balance;
        }
        this.balance -= amount;
        return this.balance;
    }
}

export class DepositAccount extends BankAccount {
    private interestRate: number;

    public constructor(owner: string, balance: number, interestRate: number) {
        super(owner, balance);
        this.interestRate = interestRate;
    }

    public deposit(amount: number): number {
        this.balance += amount;
        return this.balance;
    }
    public withdraw(): number {
        console.log('Cannot withdraw from a fixed deposit!');
        return this.balance;
    }

    public applyInterest(): number {
        this.balance += (this.balance * this.interestRate) / 100;
        return this.balance;
    }
}
