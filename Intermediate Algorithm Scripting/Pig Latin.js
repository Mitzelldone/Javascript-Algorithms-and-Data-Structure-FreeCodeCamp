// Pig Latin

/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    return str
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/,"$2$1ay")
}

console.log(translatePigLatin("consonant"));

/*
Code Explanation

- Use `replace()` on the string, using a regular expression to check if the first letter is a consonant and adding **way** at the end in this case. If the first letter is a consonant nothing will happen at this point.

- Use `replace()` again to check for consonants at the beginning of the word and to move to the  end of the word and add **ay** at the end.

-^ : Match Beginning String Patterns.
-* : Match Characters that Occur Zero or More Times.
- [^aeiou] : Matches all characters that are not a vowel.
- [aeiou] : Matches all characters that are a vowel.
- + : Match Characters that Occur One or More Times. 
- $1 : C
- $2 : onsonant
*/