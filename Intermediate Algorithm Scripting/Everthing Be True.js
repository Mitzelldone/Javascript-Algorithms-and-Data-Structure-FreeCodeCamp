// Everything Be True

/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
    
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
}

console.log(truthCheck(
	[
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
));
// Expected output: true

/* Code Explanation

- For *every* object in the `collection` array, check the truthiness of object’s property passed in `pre` parameter
- `Array.prototype.every` method internally checks if the value returned from the callback is truthy.
- Return `true` if it passes for *every* object. Otherwise, return `false`.

*/
 