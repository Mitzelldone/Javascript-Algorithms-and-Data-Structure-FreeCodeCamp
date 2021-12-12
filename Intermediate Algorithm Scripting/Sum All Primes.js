// Sum All Primes

/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {

    // Check all numbers for primality
   

    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        // console.log(num) : 4 5 6 7 8 9 9 10  
        if (num % i == 0){
            // console.log(num) : 4 6 8 9 10
            return false;
        }
      }
      return true;
    }
    
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)){
        // console.log(i) :  2 3 5 7
        sum += i;
      }
    }
    return sum;
    
}
console.log(sumPrimes(10));
// Expected output = 17

 /* Code Explanation
 - We loop over all values in our range, adding them to the sum if they are prime.
 - Our primality checking function returns false
 - If the target number is divisible by any number in between 2 and the square root of the target number. We only need to check up to the suare root because the square root of a number is the largest possible unique divisor.
 */