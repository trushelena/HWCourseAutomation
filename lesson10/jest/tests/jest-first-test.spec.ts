import { Employee } from 'src/employee';
import { LeadDeveloper } from 'src/lead-developer';
import { ProjectManager } from 'src/project-manager';

describe('LeadDeveloper', () => {
    let leadDev: LeadDeveloper;
    let employee: Employee;
    let pm: ProjectManager;

    beforeEach(() => {
        leadDev = new LeadDeveloper('Artur', 80000, 'TypeScript');
        employee = new Employee('Vlad', 'QA', 50000);
        pm = new ProjectManager('Alina', 5430);
    });

    test('should evaluate performance correctly with Lead Dev position', () => {
        expect(leadDev.performLeaderDuties(employee)).toBe(
            'Artur is evaluating the performance Vlad.'
        );
    });   
    test('should evaluate performance correctly with PM position', () => {
            expect(pm.performLeaderDuties(employee)).toBe(
                'Alina is evaluating the performance Vlad.'
        );
    });
});
