import { IEmployee } from './interface-employee';


export class Employee implements IEmployee {
    public constructor(public name: string, public position: string, public salary: number) {}

    public work(): void {
        console.log(`${this.name} is working on general tasks.`);
    }

    public requestVacation(days: number): void {
        console.log(`${this.name} has requested ${days} days of vacation.`);
    }

    public receiveSalary(): void {
        console.log(`${this.name} has received a salary of ${this.salary} USD.`);
    }

    public giveFeedback(feedback: string): void {
        console.log(`${this.name} gave feedback: "${feedback}"`);
    }

    public logHours(hours: number): void {
        console.log(`${this.name} logged ${hours} working hours.`);
    }

    public attendTraining(trainingName: string): void {
        console.log(`${this.name} attended training: ${trainingName}.`);
    }
}
