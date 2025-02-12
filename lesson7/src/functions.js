function sumArrayElements(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var numberArray = [1, 2, 3, 4, 5];
var stringArray = ["6", "7", "8", "9", "0"];
var convertedStringArray = stringArray.map(Number);
var sumNumbers = sumArrayElements(numberArray);
var sumStrings = sumArrayElements(convertedStringArray);
console.log("Sum of array numbers:", sumNumbers);
console.log("Sum of string array:", sumStrings);
