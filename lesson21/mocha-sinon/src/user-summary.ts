import { User } from './interface-classes';
export class UserSummary {
    public fullName: string;
    public nickname: string;
    public location: string;
    public birthDate: string;

    public constructor(user: User) {
        this.fullName = `${user.name.first} ${user.name.last}`;
        this.nickname = user.email.split('@')[0];
        this.location = `${user.location.city}, ${user.location.country}`;
        this.birthDate = new Date(user.dob.date).toLocaleDateString('en-GB');
    }

    public getSummary(): string {
        return `${this.fullName}\n Born on: ${this.birthDate}\n From: ${this.location}\n Username: ${this.nickname}`;
    }
}
