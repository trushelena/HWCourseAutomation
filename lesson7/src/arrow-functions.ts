const sumArrayElements = (arr : number []) : number => arr.reduce((sum, current) => sum + current, 0);

const numberArray : number [] = [1, 2, 3, 4, 5];
const stringArray : string [] = ['6', '7', '8', '9', '0'];

const convertedStringArray : number [] = stringArray.map(Number);

const sumNumbers : number = sumArrayElements(numberArray);
const sumStrings : number = sumArrayElements(convertedStringArray);

console.log('Sum of array numbers:', sumNumbers);
console.log('Sum of string array:', sumStrings);
