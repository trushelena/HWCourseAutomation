import { Developer } from './developer';
import { LeadDeveloper } from './lead-developer';
import { promoteEmployee } from './promote-employee';
import { QaEngineer } from './qa-engineer';

const dev = new Developer('Maryna', 5000, 'TypeScript');
const leadDev = new LeadDeveloper('Artur', 7000, 'Java');
const qa = new QaEngineer ('Olena', 300);
//dev work
dev.work();
dev.writeCode('TypeScript');
dev.fixBug(101);
dev.reviewCode('Anton');
dev.learnNewTechnology('React');
dev.attendTraining('Advanced TypeScript');
dev.requestVacation(5);
dev.receiveSalary();
dev.giveFeedback('Great team environment!');
//lead work
leadDev.work();
leadDev.designArchitecture();
leadDev.planSprintTasks();
leadDev.mentorDevs(dev);
leadDev.reviewCode('Erika');
//Qa work
qa.work();
qa.writeTC('Regression Test Suite');
qa.testFixedBug(101);
qa.learnNewTechnology('Automation from 0 to hero');
qa.attendTraining('ISTQB');
qa.requestVacation(5);
qa.receiveSalary();
qa.giveFeedback('Great work!');

//promoting
promoteEmployee(dev);
promoteEmployee(leadDev);
promoteEmployee(qa);
