// Declaration of variables of different types
let num1 = 10.5;
let num2 = 5;
let str1 = "20.5";
let str2 = "Hello";
let bool1 = true;
let bool2 = false;

// Arithmetic operations with numbers
console.log("Addition of numbers:", num1 + num2);
console.log("Subtraction of numbers:", num1 - num2);
console.log("Multiplication of numbers:", num1 * num2);
console.log("Division of numbers:", num1 / num2);
console.log("Remainder of division of numbers:", num1 % num2);


// Operations with strings
console.log("String concatenation:", str1 + str2);
console.log("Converting string to number and adding:", Number(str1) + num1);

// Operations with boolean values
console.log("Addition of boolean values:", bool1 + bool2);
console.log("Boolean value ** number:", bool1 ** num1);
console.log("Boolean value + string:", bool1 + str2);

// Mixed operations
console.log("Number + string:", num1 + str1);
console.log("Number * string (if possible):", num1 * str1);
console.log("Number / boolean value:", num1 / bool1);
