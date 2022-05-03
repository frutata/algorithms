// parensValid(input)
// input is a string
// return true if the input has a valid configuration of parentheses and false
// otherwise. by "return true/false" I mean the boolean value, not a string
// what's valid?
// - no more open parens than close parens or vice versa
// - no close parens that appear before a valid open paren
// - ignore all other characters that are not ( and )
// - () -> true
// - )( -> false
// - hello! -> true (???)
// - (()) -> true
// - (q(a)(x)(!(7(xx)(34)(2, 7, 11)))) -> true
// - (() -> false
// - hello!() -> true
// suggestion - don't bother trying to split the string...
// it won't do us any good and just makes things more complicated
// suggestion again - do we have to check every single character in the input?
// hypothetical input: ) followed by one billion characters
// or: a) followed by one billion characters
// or: a37()) followed by one billion characters

function parensValid(str) {
    var openingCount = 0
    var closingCount = 0
    for (var i = 0; i < str.length; i++)
    {
        if(str[i] == "(")
        {
            openingCount++ 
        }
        else if(str[i] == ")")
        {
            closingCount++
        }

        if(closingCount > openingCount)
        {
            return false
        }
    }
    if (closingCount != openingCount){
        return false
    }
    else{
        return true
    }
}

console.log(parensValid('()'));
console.log(parensValid('(())'));
console.log(parensValid('(q(a)(x)(!(7(xx)(34)(2, 7, 11))))'));
console.log(parensValid(')('));
console.log(parensValid('(()'));
console.log(parensValid('hello!'));
// make your own test cases too!

// bracesValid(input)
// as above, but for parentheses, curly brackets (or curly braces) and square
// brackets - with the caveat that we can't have two sets of braces
// interleaved, or our function should return false, as follows:
// ([)] -> false
// the parentheses close before the square brackets do, which is Bad
// ()[]{} -> true
// (] -> false
// x(37[q{3, 7, 9}{22, 6, 91}])(32q) -> true
// ()]... -> false

function bracesValid(input){
    // code here plz
}

console.log(bracesValid('x(37[q{3, 7, 9}{22, 6, 91}])(32q)[]')); // should return true 
console.log(bracesValid('([{}{}])()')); // should return true
console.log(bracesValid('([{}{]})()')); // should return false
console.log(bracesValid('this is valid!')); // should return true


// bonus: what if we also want to check angle brackets (< and >)? what if
// sometimes we care about curly braces but sometimes we don't?