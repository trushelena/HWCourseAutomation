import { Developer } from './developer';
import { Employee } from './employee';
import { ILeader } from './ileader';

export class LeadDeveloper extends Developer implements ILeader {
    public constructor(name: string, salary: number, mainLanguage: string) {
        super(name, salary, mainLanguage);
        this.position = 'Lead Developer';
    }

    public mentorEmployee(employee: Employee): void {
        console.log(`${this.name} is mentoring ${employee.name}.`);
    }

    public manageTeam(): void {
        console.log(`${this.name} is managing the development team.`);
    }

    public reportToManager(): void {
        console.log(`${this.name} is reporting to the manager.`);
    }

    public designArchitecture(): void {
        console.log(`${this.name} is designing the system architecture.`);
    }

    public leadCodeReview(): void {
        console.log(`${this.name} is leading a code review session.`);
    }

    public planSprintTasks(): void {
        console.log(`${this.name} is planning sprint tasks.`);
    }

    public conductOneToOne(employee: Employee): void {
        console.log(`${this.name} is having a one-to-one meeting with ${employee.name}.`);
    }
    public evaluatePerformance(employee: Employee): void {
        console.log(`${this.name} is evaluating the performance ${employee.name}.`);
    }
}
