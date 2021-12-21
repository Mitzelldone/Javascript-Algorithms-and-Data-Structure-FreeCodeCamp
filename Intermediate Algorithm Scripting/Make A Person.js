// Make a Person

/*
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var fullName = firstAndLast;

    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = () => {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
  var bob = new Person("Bob Ross");
  
  console.log(bob.getFullName());
  // Bob Ross
  
  console.log(bob.setFirstName("Bob"));
  // Bob

/* Code Explanation

- Create a variable that will make a copy of the full name that was passed as a parameter.

- Then we can proceed to create the six methods need and return what is asked for.

- For the individual setter, we can use the split to turn the `fullName` into an array of first and last names and concatenate the unchanged portion of the name with what was passed as a parameter.

*/