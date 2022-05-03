/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

/**
 * De-dupes the given string.

 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */

function stringDedupe(str) {
    var newStr = ''
    var arr = []
    for(var i = 0; i < str.length; i++)
    {
        var boolean = true
        for(var j = 0; j < arr.length; j++)
        {
            if(str[i] == arr[j])
            {
                boolean = false
            }
        }
        if(boolean == true)
        {
            newStr += str[i]
        }
        arr.push(str[i])
    }
    return newStr
}

/****************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.

 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */

function reverseWords(str) {
    var arr = str.split(' ')
    var temp = ''
    var newStr = ''
    for(var i = 0; i < arr.length; i++)
    {
        temp += arr[i]
        
        for(var j = temp.length - 1; j >= 0; j--)
        {
            newStr += temp[j]
        }
        newStr += ' '
        temp = ''
    }
    return newStr
}

/********************************/
/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

const str2 = "hello";
const expected2 = "hello";

const str3 = "   This  is a   test  ";
const expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.

 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */

function reverseWordOrder(wordsStr) {
    var arr = wordsStr.trim().split(" ")
    var newStr = ''
    for(var i = arr.length - 1; i >= 0; i--)
    {
        if(arr[i] != '')
        {
            newStr += arr[i]
            newStr += ' '       
        }
    }
    return newStr
}