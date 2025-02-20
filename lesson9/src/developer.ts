import { Employee } from "./employee";



export class Developer extends Employee {
    public constructor(name: string, salary: number, public mainLanguage: string) {
        super(name, 'Developer', salary);
    }

    public writeCode(language: string): void {
        console.log(`${this.name} is writing code in ${language}.`);
    }

    public fixBug(bugId: number): void {
        console.log(`${this.name} fixed bug #${bugId}.`);
    }

    public reviewCode(colleague: string): void {
        console.log(`${this.name} is reviewing ${colleague}'s code.`);
    }

    public deployToProduction(): void {
        console.log(`${this.name} deployed the latest code to production.`);
    }

    public attendStandup(): void {
        console.log(`${this.name} is attending the daily standup meeting.`);
    }

    public learnNewTechnology(technology: string): void {
        console.log(`${this.name} is learning ${technology}.`);
    }
}
