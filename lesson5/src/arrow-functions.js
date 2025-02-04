const sumArrayElements = (arr) => arr.reduce((sum, current) => sum + current, 0);

const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["6", "7", "8", "9", "0"];

const convertedStringArray = stringArray.map(Number);

const sumNumbers = sumArrayElements(numberArray);
const sumStrings = sumArrayElements(convertedStringArray);

console.log("Sum of array numbers:", sumNumbers);
console.log("Sum of string array:", sumStrings);
