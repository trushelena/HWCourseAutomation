export interface JokeDto {
    id: string;
    type: string;
    setup: string;
    punchline: string;
}

export interface JokeApiResponse {
    status: number;
    joke: JokeDto; 
}