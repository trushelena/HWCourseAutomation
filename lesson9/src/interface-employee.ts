export interface IEmployee {
    name: string;
    position: string;

    work(): void;
    requestVacation(days: number): void;
    receiveSalary(): void;
    giveFeedback(feedback: string): void;
    logHours(hours: number): void;
    attendTraining(trainingName: string): void;
}
