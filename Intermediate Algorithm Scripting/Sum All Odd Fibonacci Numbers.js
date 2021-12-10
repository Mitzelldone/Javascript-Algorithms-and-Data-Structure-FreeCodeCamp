// Sum All Odd Fibonacci Numbers

/*
Given a positive integer num, return the sum of all 'odd' Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;

    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }
    return result;
  }
  console.log(sumFibs(4));
  // Expected output: 5
  console.log(sumFibs(1000));
  // Expected output: 1785
  console.log(sumFibs(75025));
  // Expected output: 135721

  /* Code Explanation
  - Create a variable to keep record of the current and previous numbers along with the result that will be returned.

  - Use a while loop to make sure we do not go over the number given as parameter.

  - We use the modulo operand to check if the current number is odd or even. If it is odd, add it to the result.

  - Complete the Fibonacci circle by rotating getting the next number and swapping values after.

  - Return the result.
  */