import { Employee } from './employee';
import { ILeader } from './ileader';

export class ProjectManager extends Employee implements ILeader {
    public constructor(name: string, salary: number) {
        super(name, 'Project Manager', salary);
    }

    public mentorEmployee(employee: Employee): void {
        console.log(`${this.name} is mentoring ${employee.name}.`);
    }

    public manageTeam(): void {
        console.log(`${this.name} is managing the project team.`);
    }

    public reportToManager(): void {
        console.log(`${this.name} is reporting to the executive board.`);
    }

    public planSprints(): void {
        console.log(`${this.name} is planning the next sprint.`);
    }

    public conductMeetings(): void {
        console.log(`${this.name} is conducting a team meeting.`);
    }

    public communicateWithStakeholders(): void {
        console.log(`${this.name} is communicating with stakeholders.`);
    }
    public conductOneToOne(employee: Employee): void {
        console.log(`${this.name} is having a 1-on-1 meeting with ${employee.name}.`);
    }
}
