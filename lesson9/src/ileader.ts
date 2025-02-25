import { Employee } from './employee';

export interface ILeader {

    conductOneToOne(employee: Employee) : void;
    manageTeam(): void;
    reportToManager(manager: string): void;
    evaluatePerformance(employee: Employee) : void;
}
