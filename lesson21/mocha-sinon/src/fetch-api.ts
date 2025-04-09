import { Results } from './interface-classes';


export async function getJson(): Promise<Results> {
    const response = await fetch('https://randomuser.me/api/?results=1');
    const json = await response.json() as Results;
    return json;
}
