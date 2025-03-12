export interface JokeDto {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

export interface RandomJokeResponse {
    joke: JokeDto;
    statusCode: number;
}