const stringArray = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const numberArray = [10, 20, 30, 40, 50];
const boolArray = [true, [[true, false]], [false, true]];
const mixedArray = [10, "Popova", true, false, 12];
const twoArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 } ];


// 1. Array with forEach()
console.log("Перебір масиву рядків:");
stringArray.forEach(item => {
    console.log(item);  // Shown each item of array
});

// 2. Number Array + Map()
console.log("\nПеребір масиву чисел (змініть значення за допомогою map()):");
const squaredNumbers = numberArray.map(num => num * num);
console.log(squaredNumbers);

// 3. Filter + Array
const olderThan30 = twoArray.filter(user => user.age > 30);
console.log(olderThan30);
// 4. To String + Array
console.log(mixedArray.toString());
// 5. flat + array
console.log(boolArray.flat());
// Copy to index 2 the element at index 3
console.log(stringArray.copyWithin(2, 3, 4));

