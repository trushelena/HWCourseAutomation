function sumArrayElements(arr: number[] | string[]): number {
    let sum = 0;
    for (const num of arr) {
        sum += typeof num === 'number' ? num : Number(num);
    }
    return sum;
}

const numberArray = [1, 2, 3, 4, 5];
const stringArray = ['rjefnjne', '2', 'derdf', '5', 'ref'];

function isValidNumber(num: number): boolean {
    return !Number.isNaN(num);
}

const convertedStringArray: number[] = stringArray
    .map(Number)
    .filter(isValidNumber);

const sumNumbers: number = sumArrayElements(numberArray);
const sumStrings: number = sumArrayElements(convertedStringArray);

console.log('Sum of array numbers:', sumNumbers);
console.log('Sum of string array:', sumStrings);
