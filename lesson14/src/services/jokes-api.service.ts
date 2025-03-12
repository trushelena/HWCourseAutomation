import { JokeDto } from 'src/dtos/joke.dto';

export class JokesApiService {
    public baseUrl: string;

    constructor() {
        this.baseUrl = 'https://official-joke-api.appspot.com';
    }


    // 1. Fetch Random Joke
    public async getRandomJoke(): Promise<JokeDto> {
        const response = await fetch(`${this.baseUrl}/random_joke`, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
            throw new Error(`Error fetching joke: ${response.statusText}`);
        }
        
        return response.json();
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