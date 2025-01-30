// Declaration of variables of different types
const num = 2;
const str = "test";
const bool = true;
const floatNum = 7.5;
const value = null;

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
console.log("!!str:", !!str); //  2 NOT operation

// Mixed logical and comparison operations
console.log("(num == str) && (num > 5):", (num == str) && (num > 5)); // true
console.log("(num === str) || (floatNum > 10):", (num === str) || (floatNum > 10)); // true
