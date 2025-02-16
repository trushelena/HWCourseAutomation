export interface Results {
    results: User[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
}

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Street {
    number: number;
    name: string;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface Dob {
    date: string;
    age: number;
}

export interface Registered {
    date: string;
    age: number;
}

export interface Id {
    name: string;
    value: string | null;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
    superLarge?: string;
}

export interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}

export async function getJson(): Promise<Results> {
    const response = await fetch('https://randomuser.me/api/?results=1');
    const json = await response.json() as Results;
    return json;
}

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


(async () => {
    const data = await getJson();
    console.log('Selected user:');
    console.log(data.results[0]);

    const userSummary = new UserSummary(data.results[0]);
    console.log('User Summary:');
    console.log(userSummary.getSummary());

})();
