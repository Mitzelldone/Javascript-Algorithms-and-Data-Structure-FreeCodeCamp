// Sorted Union

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(...arr) {

    // make an array out of the given arrays and flatten it ( using the spread operator)
    const flatArray = [].concat(...arr)

    // create a Set which clears any duplicates since it's a regular set and not multiset.
    return [...new Set(flatArray)];
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  // Expected output: [ 1, 3, 2, 5, 4 ]

/* Code Explanation

- We first use `concat()` with an empty array as a starting point and the spread operator `...` to create an array out of the Arguments object and to flatten it at the same time.

- then we use the new `Set` object to store only unique values.
*/