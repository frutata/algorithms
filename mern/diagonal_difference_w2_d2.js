// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
Given a square matrix (2d array) of integers
Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */

/**
   * Calculates the absolute diagonal difference of a square matrix.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
   *    a square matrix (rows and columns).
   * @returns {number} Represents the absolute difference between the top left to
   *    bottom right diagonal and the top right to bottom left diagonal.
   */

function diagonalDifference(sqrMatrix) {
    // defines our values
    let x = 0;
    let y = 0;
    left = 0;
    right = 0;

    // collecting the values for "left" by moving diagonally left to right
    while (x < sqrMatrix.length && y < sqrMatrix.length){
        console.log(sqrMatrix[y][x]);
        // adding each iteration to "left"
        left += sqrMatrix[y][x];
        x ++;
        y ++;
    }
    // reseting our values to where we need them to start iterating from right to left diagonally
    x --;
    y = 0;
    while (x >= 0 && y < sqrMatrix.length){
        console.log(sqrMatrix[y][x]);
        right += sqrMatrix[y][x];
        x --;
        y ++;
    }
    // console.log(left);
    // console.log(right);
    // returning the left value minus right value
    return left -= right;
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));
