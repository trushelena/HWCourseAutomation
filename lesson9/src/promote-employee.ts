import { IEmployee } from './interface-employee';

export function promoteEmployee(employee: IEmployee): void {
    console.log(`${employee.name} is being promoted to a higher position.`);
}
