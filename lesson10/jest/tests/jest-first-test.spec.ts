import { Employee } from 'src/employee';
import { LeadDeveloper } from 'src/lead-developer';
import { ProjectManager } from 'src/project-manager';

describe('LeadDeveloper', () => {
    let leadDev: LeadDeveloper;
    let employee: Employee;
    let pm: ProjectManager;

    test('should evaluate performance correctly with Lead Dev position', () => {
        const leadDev = new LeadDeveloper('Artur', 80000, 'TypeScript');
        const employee = new Employee('Vlad', 'QA', 50000);

        const result = leadDev.performLeaderDuties(employee);

        expect(result).toBe('Artur is evaluating the performance Vlad.');
    });   
    test('should evaluate performance correctly with PM position', () => {
        const employee = new Employee('Vlad', 'QA', 50000);
        const pm = new ProjectManager('Alina', 50000);

        const result = pm.performLeaderDuties(employee);
        
        expect(result).toBe('Alina is evaluating the performance Vlad.'
        );
    });
});
