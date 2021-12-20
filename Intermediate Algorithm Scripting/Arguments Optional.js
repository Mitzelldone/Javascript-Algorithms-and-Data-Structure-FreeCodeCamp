// Arguments Optional

/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
    const [first, second] = arguments;

    // First argument is not a number
    if (typeof(first) !== "number")
        return undefined;

    // First argument is a number
    //  and second argument is not defined
    if (second === undefined)

        //returning a *function*
        return (second) => addTogether(first, second);

    // First argument is a number
    //  and second argument is not a number
    if (typeof(second) !== "number")
        return undefined;

    // First and seconds argument is a number    
    return first + second;
  }
  
  console.log(addTogether(2,3))
  // Expected output: 5
  console.log(addTogether(2,"3"))
  // Expected output: undefined.