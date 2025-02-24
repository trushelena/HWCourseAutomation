import { Employee } from './employee';
import { ILeader } from './ileader';

export function performLeaderDuties(leader: ILeader,  employee: Employee): void {
    leader.manageTeam();
    leader.reportToManager('CTO');
    leader.evaluatePerformance(employee);
}
