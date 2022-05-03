// rotateString(str, amount)
// returns a copy of the given string (str) rotated to the right a number
// (amount) of characters - i.e. the string is shifted to the right that
// number of characters, and anything that would go past the end of the string
// returns to the front
//
// rotateString("Good morning!", 3) -> "ng!Good morni"
// rotateString("Good morning!", 4) -> "ing!Good morn"
// rotateString("Good morning!", 5) -> "ning!Good mor"
//
// the output string length should be exactly the same as the input string length
//
// remember that strings are immutable - you're going to have to create a
// new string
//
// bonus objectives if u wanna: can the amount be more than the string length?
// what if amount is negative? can you rotate it to the left?
function rotateString(str, amount) {
    var beginningStr = ''
    var endStr = ''
    for(var i = 0; i < str.length; i++){
        if(i < str.length - amount){
            endStr += str[i]
        }
        else{
            beginningStr += str[i]
        }
    }
    return beginningStr += endStr
}

console.log(rotateString("Let's talk about relational databases!", 7))
// should return "abases!Let's talk about relational dat"
console.log(rotateString("abcde", 5))
// should return "abcde"

// isRotation(stringA, stringB)
// returns true if a rotation of stringA could form stringB or vice versa
// (if one is true, the other is true)
// return false otherwise
//
// isRotation("Good morning!", "ng!Good morni") -> true
// isRotation("Good morning!", "ng! Good morni") -> false
// (the strings are of different lengths, it's not possible)
// isRotation("Good morning!", "ng!Good monri") -> false
//
// suggestion - this is brute forceable, but once you get that working
// see if there's a more elegant solution for a more civilized age

function isRotation(stringA, stringB) {
    //Check if lengths are the same
    if(stringA.length != stringB.length){
        return false
    }
    //Iterate through stringA and check if it equals stringB inputted into the above rotate function, otherwise return false
    for(var i = 1; i < stringA.length; i++)
    {
        if(rotateString(stringA, i) === stringB)
        {
            return true
        }
    }
    return false;
}
// come up with your own test cases for this one!
// they won't always be given to you in the real world