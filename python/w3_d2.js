/* 
Array: Binary Search (non recursive)
Given a sorted array and a value, return whether the array contains that value.
Do not sequentially iterate the array. Instead, ‘divide and conquer’,
taking advantage of the fact that the array is sorted .
Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */



/* 
Given two arrays, interleave them into one new array.
The arrays may be different lengths. The extra items should be added to the
back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {

    //first check to see if either array is empty

    if (arr1.length == 0) {
        return arr2;
    } else if (arr2.length == 0) {
        return arr1;
    }

    let lenDiff = arr1.length - arr2.length;
    let resultArr = [];

    if (lenDiff == 0) { //if both arrays are the same length
        for (let i = 0; i < arr1.length; i++) {
            resultArr.push(arr1[i]);
            resultArr.push(arr2[i]);
        }

    } else if (lenDiff < 0) { //if arr2.length > arr1.length

        for (let i = 0; i < Math.abs(lenDiff); i++) { //zip the arrays up to the diff in length
            resultArr.push(arr1[i]);
            resultArr.push(arr2[i]);
        }

        for (let i = Math.abs(lenDiff); i < arr2.length; i++) { //finish zipping arr2 into the result array
            resultArr.push(arr2[i]);
        }

    } else if (lenDiff > 0) { //if arr1.length > arr2.length

        for (let i = 0; i < Math.abs(lenDiff); i++) { //zip the arrays up to the diff in length
            resultArr.push(arr1[i]);
            resultArr.push(arr2[i]);
        }

        for (let i = Math.abs(lenDiff); i < arr1.length; i++) { //finish zipping arr1 into the result array
            resultArr.push(arr1[i]);
        }

    }
    return resultArr;
}