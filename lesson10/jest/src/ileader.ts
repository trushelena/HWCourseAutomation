import { Employee } from './employee';

export interface ILeader {

    conductOneToOne(employee: Employee) : void;
    manageTeam(): void;
    reportToManager(manager: string): void;
    performLeaderDuties(employee: Employee) : void;
}
