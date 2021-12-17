// Binary Agents

/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
    return String.fromCharCode(
        ...str.split(" ").map(char => parseInt(char,2))
    );
}
  
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// Expected output : Aren't bonfires fun!?

/* Code Explanation
- First we use `split()` to be able to work on each character as an ARRAY ELEMENT.
- The use `map()` to process each element from BINARY to DECIMAL using `parseInt()`
- Last we can use `String.fromCharCode() to convert each ASCII number into the corresponding character.
- However `fromCharCode()` expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers.


* The `parseInt()` function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
* The static `String.fromCharCode()` method returns a string created from the specified sequence of UTF-16 code units.
* `Spread syntax (...)` allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

*/