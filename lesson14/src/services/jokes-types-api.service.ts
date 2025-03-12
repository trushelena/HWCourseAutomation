import { JokeDto, JokeApiResponse } from "src/dtos/random-jokes.dto";


export class JokesApiObject {
    public baseUrl: string;

    constructor() {
        this.baseUrl = 'https://official-joke-api.appspot.com';
    }

    public async getRandomJoke(): Promise<JokeApiResponse> {
        const response = await fetch(`${this.baseUrl}/random_joke`, {
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (!response.ok) {
            throw new Error(`Error fetching joke: ${response.statusText}`);
        }
    
        const joke = (await response.json()) as JokeDto;
        return { status: response.status, joke };
    }

    public async getJokesByType(): Promise<string[]> {
        const url = `${this.baseUrl}/types`;
    
        const response = await fetch(url, {
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (!response.ok) {
            throw new Error(`Error fetching joke types: ${response.statusText}`);
        }
    
        return response.json();
    }
}