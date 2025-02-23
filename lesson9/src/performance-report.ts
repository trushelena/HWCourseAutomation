import { ILeader } from './ileader';

export function performLeaderDuties(leader: ILeader): void {
    leader.manageTeam();
    leader.reportToManager('CTO');
}
