import { Employee } from './employee';


export class QaEngineer extends Employee {
    public constructor(name: string, salary: number) {
        super(name, 'QA Engineer', salary);
    }

    public writeTC(documentation: string): void {
        console.log(`${this.name} is creating TC in ${documentation}.`);
    }

    public testFixedBug(bugId: number): void {
        console.log(`${this.name} tests fix of defect #${bugId}.`);
    }

    public attendStandup(): void {
        console.log(`${this.name} is attending the daily standup meeting.`);
    }

    public learnNewTechnology(technology: string): void {
        console.log(`${this.name} is learning ${technology}.`);
    }
}
