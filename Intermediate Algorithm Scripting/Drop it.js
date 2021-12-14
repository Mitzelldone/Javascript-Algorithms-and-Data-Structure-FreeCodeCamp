// Drop it

/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    // console.log(sliceIndex):2
    

    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length );
  }
  
console.log(dropElements([1, 2, 3, 4], function(n) {
    return n >= 3; 
}));

// Expected output: [3, 4]

/* Code Explanation
- Use ES6 findIndex() function to find the index of the element that passes the condition.
- Slice the array from the found index until the end.
- There is one edge case! if the condition is no met against any of the elements 'findIndexs' will return 1 which messes up the input slice(). In this case use a simple conditional operator to return false instead of 1. And the ternary operator returns the found index of required elements when the condition is true, and the length of the array otherwise so that the return value is an empty array as is instructed.

*/