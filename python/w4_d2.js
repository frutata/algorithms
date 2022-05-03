/* 
Return the fibonacci number at the nth position, recursively.

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it,
starting with 0 and 1 as the first two numbers of the sequence.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */

function fibonacci(num) {
    if(num < 0){
        return null
    }
    if(num < 2){
        return num
    }
    return fibonacci(num-1) + fibonacci(num-2)

}
/*****************************************************************************/

// Greatest Common Factor
// Given two integers, create recursiveGreatestCommonFactor(num1, num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// 1) if num1 === num2, that number is the greatest common factor;
// 2) if a>b, then you can remove b from a, which gets you closer to the GCF;
// 3) if b>a, then you can remove a from b, which gets you closer to the GCF;
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF ’s reach. You should be able to compute rGCF(123456,987654) .

function recursiveGreatestCommonFactor(num1,num2){
    if(num2 === 0){
        return num1
    }
    return recursiveGreatestCommonFactor(num2, num1%num2)
}

console.log(recursiveGreatestCommonFactor(50,180)); // 10
console.log(recursiveGreatestCommonFactor(7,35)); // 7
console.log(recursiveGreatestCommonFactor(65,95)); // 5
console.log(recursiveGreatestCommonFactor(123456,987654)); // 6
console.log(recursiveGreatestCommonFactor(102,1000)); // 2
console.log(recursiveGreatestCommonFactor(7,13)); // 1