function sumArrayElements(arr: number[] | string[]): number {
    let sum = 0;
    for (const num of arr) {
        sum += typeof num === 'number' ? num : Number(num);
    }
    return sum;
}

export const numberArray = [1, 2, 3, 4, 5];
const stringNumberArray = ['rjefnjne', '2', 'derdf', '5', 'ref'];

function isValidNumber(num: number): boolean {
    return !Number.isNaN(num);
}

const convertedStringArray: number[] = stringNumberArray
    .map(Number)
    .filter(isValidNumber);

const sumNumbers = sumArrayElements(numberArray);
const sumStrings = sumArrayElements(convertedStringArray);

console.log('Sum of array numbers:', sumNumbers);
console.log('Sum of string array:', sumStrings);
