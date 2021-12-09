// Convert HTML Entities

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {

    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    };

    
	// Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, character => htmlEntities[character]);
  }
  
  
console.log(convertHTML("Dolce & Gabbana"));
// Expected output: Dolce &amp; Gabbana

/* Code Explanation
- Create an object to use the Lookup functionality and easily find the characters.
- Use `replace()` to replace characters with regex.
- The first argument for `replace()`is a regex that catches all the target characters and puts them into a capturing group.
- The second arguments for `replace()` is a function with the matched character as a parameter. It returns the correspondent entity from `htmlEntities`.
*/

/* MDN

The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
If pattern is a string, only the first occurrence will be replaced.

The original string is left unchanged.


*/