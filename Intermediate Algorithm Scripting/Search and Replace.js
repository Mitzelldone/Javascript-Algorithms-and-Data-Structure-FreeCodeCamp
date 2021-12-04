// Search and Replace

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {

    // Find index where before is on string.
    var index = str.indexOf(before); // index = 18

    // Check to see if the first letter use uppercase or not
    if (str[index] === str[index].toUpperCase()) {

        // Change the after word to be capitalized before we use it.
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {

        // Change the after word to be capitalized before we use it.
        after = after.chartAt(0).toLowerCase() + after.slice(1);
    }

    // Replace the original str with the edited one.
    str = str.replace(before, after);

    return str;
}

console.log(myReplace("A quick brown for jumped over the lazy dog", "jumped", "leaped"));

// expected output : A quick brown for leaped over the lazy dog.


