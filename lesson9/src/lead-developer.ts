import { Developer } from './developer';

export class LeadDeveloper extends Developer {
    public constructor(name: string, salary: number, mainLanguage: string) {
        super(name, salary, mainLanguage);
        this.position = 'Lead Developer';
    }

    public mentorDevs(dev: Developer): void {
        console.log(`${this.name} is a Lead for ${dev.name}.`);
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
}
