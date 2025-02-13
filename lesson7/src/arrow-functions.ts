import { numberArray } from './functions';

const sumArrayElements = (arr: string[] | number[]): number => {
    return arr
        .map(item => typeof item === 'string' ? Number(item) : item)
        .filter(num => !isNaN(num))
        .reduce((sum, current) => sum + current, 0);
};

//const numberArray = [1, 2, 3, 4, 5];
const stringArray = ['6', '7', '8', 'er', '0'];

const convertedStringArray = stringArray.map(Number);

const sumNumbers : number = sumArrayElements(numberArray);
const sumStrings : number = sumArrayElements(convertedStringArray);

console.log('Sum of array numbers:', sumNumbers);
console.log('Sum of string array:', sumStrings);
