// Steamroller

/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    return arr
        .toString() // 1,2,3,4
        .replace(",,",",") // 1,2,,3 => 1,2,3
        .split(",") // ['1', '2', '3']
        .map(function(v) {
            if(v == "[object Object]") {
                // bring back empty objects.
                return {};
            
            } else if (isNaN(v)) {
                // if not a number (string)    
                return v;
            
            } else {
                // if a number in a string, conver it to regular number.
                return parseInt(v);
            }
        });
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  // Expected output: [1, 2, 3, 4]



/* Code explanation

- First we turn the array to string, which will give us a string of numbers separated by a comma, double comma.
- If there was an empty array and literal object text if there was an object, which we can fix later in our if statement.
- We replace the double comma with  one, then split it back into an array.
- Map through the array and fix object values and convert string numbers to regular numbers.
- The isNaN() function determines whether a value is NaN or not. Because coercion inside the isNaN function can be surprising, you may alternatively want to use Number.isNaN().
- The Array.isArray() method determines whether the passed value is an Array. 

*/