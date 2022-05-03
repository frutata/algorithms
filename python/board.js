// const strA1 = "ABC";
// const strB1 = "abc";
// const expected1 = true;

// const strA2 = "ABC";
// const strB2 = "abd";
// const expected2 = false;

// const strA3 = "ABC";
// const strB3 = "bc";
// const expected3 = false;

/**
 * Determines whether or not the strings are equal, ignoring case. Takes in 2 strings, and return true/false whether or not they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.
 */

// function caseInsensitiveStringCompare(strA, strB) {
    // version #1)
    // if (strA.toLowerCase() !== strB.toLowerCase() ) {
    //     return false;
    // } else {
    //     return true;
    // }

    // version #2)
    // return strA.toLowerCase() !== strB.toLowerCase() ? "It's okay!" : "It's not okay!";

    // version #3)
    // return strA.toLowerCase() === strB.toLowerCase();

    // alternate #1)
    // check if strings are different length
//     if (strA.length != strB.length) {
//         return false;
//     }

//     strALower = strA.toLowerCase();
//     strBLower = strB.toLowerCase();

//     for(var x = 0 ; x < strALower.length() ; x ++) {
//         if (strALower[x] !== strBLower[x]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(caseInsensitiveStringCompare(strA1, strB1))
// console.log(caseInsensitiveStringCompare(strA2, strB2))
// console.log(caseInsensitiveStringCompare(strA3, strB3))

// =====================================================
// Acronym
// =====================================================

/* 
Acronyms
Create a function that, given a string, returns the string’s acronym 
(first letter of each word capitalized). 
Do it with .split first if you need to, then try to do it without
*/

// const str1 = "object oriented programming";
// const expected1 = "OOP";

// // The 4 pillars of OOP
// const str2 = "abstraction polymorphism inheritance encapsulation";
// const expected2 = "APIE";

// const str3 = "software development life cycle";
// const expected3 = "SDLC";

// // Bonus: ignore extra spaces
// const str4 = "  global   information tracker    ";
// const expected4 = "GIT";

// /**
//  * Turns the given str into an acronym.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str A string to be turned into an acronym.
//  * @returns {string} The acronym.
//  */
// function acronymize(str) {
//     strArr = str.trim().split(" ");
//     var result = "";

//     for(var i = 0 ; i < strArr.length ; i++) {
//         console.log(strArr[i][0]);
//         if(strArr[i][0] == undefined) {
//             continue;
//         }
//         result += strArr[i][0].toUpperCase();
//     }

//     return result;
// }

// console.log(acronymize(str1))
// console.log(acronymize(str2))
// console.log(acronymize(str3))
// console.log(acronymize(str4))



// ===============
// Reverse String
// ===============

/* 
String: Reverse
Given a string,
return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */

    // version #1
    // function reverseString(str) {
    //     var reverse = ""
    //     for( x = 0 ; x < str.length ; x ++) {
    //         reverse += str[str.length - 1 - x]
    //     }
    //     return reverse
    // }
    
    //version #2
    function reverseString(str) {
        let reverseStr = '';
        for (let i = str.length-1; i >= 0; i--){
            reverseStr += str[i];
        }
        return reverseStr;
    }

console.log(reverseString(expected1))
console.log(reverseString(expected2))
console.log(reverseString(expected3))
console.log(reverseString(expected4))