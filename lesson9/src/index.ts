import { Developer } from './developer';
import { LeadDeveloper } from './lead-developer';
import { promoteEmployee } from './promote-employee';

const dev = new Developer('Maryna', 5000, 'TypeScript');
const leadDev = new LeadDeveloper('Artur', 7000, 'Java');

//dev.work();
dev.writeCode('TypeScript');
dev.fixBug(101);
dev.learnNewTechnology('React');
//dev.attendTraining('Advanced TypeScript');
//dev.requestVacation(5);
//dev.receiveSalary();
//dev.giveFeedback('Great team environment!');

//leadDev.work();
leadDev.designArchitecture();
leadDev.planSprintTasks();
leadDev.mentorJunior(dev);
leadDev.reviewCode('Erika');
leadDev.deployToProduction();

promoteEmployee(dev);
promoteEmployee(leadDev);
