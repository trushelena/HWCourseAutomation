// Declaration of variables of different types
let num = 2;
let str = "test";
let bool = true;
let floatNum = 7.5;
let value = null;

// Comparison operations
console.log("num == str:", num == str);
console.log("num === str:", num === str);
console.log("num != str:", num != str);
console.log("num !== str:", num !== str);
console.log("num > floatNum:", num > floatNum);
console.log("num <= floatNum:", num <= floatNum);

// Logical operations
console.log("num > 5 && bool:", num > 5 && bool); //AND operation
console.log("num < 5 || bool:", num < 5 || bool); // OR operation
console.log("!bool:", !bool); //  NOT operation
console.log("??null", num ?? value); // nullish coalescing operator
console.log("!!str:", !!str); //  NOT operation

// Mixed logical and comparison operations
console.log("(num == str) && (num > 5):", (num == str) && (num > 5)); // true
console.log("(num === str) || (floatNum > 10):", (num === str) || (floatNum > 10)); // true
