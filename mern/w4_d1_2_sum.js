// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */

// DOESN'T WORK YET NEEDS TO BE FIXED UP
function twoSum(nums, targetSum) {
    // console.log(`nums: ${nums}`);
    // console.log(`targetSum: ${targetSum}`);
    //create an indexes array to store the indexes after we find them
    let indexes = [];
    //first forloop is going to contain the first number we use
    for (i = 0; i < nums.length; i++) {
        // console.log(`index(i): ${i}, value: ${nums[i]}`);
        //we want to skip any numbers that are greater than our targetSum to save time
        if (nums[i] > targetSum) {
            console.log("First number larger than target")
            continue;
        }
        //second forloop is going to be the second number we use in the equation
        for (j = i + 1; j < nums.length - i - 1; j++) {
            // console.log(`index(j): ${j}, value: ${nums[j]}`);
            if (nums[j] > targetSum) {
                console.log("Second number larger than target")
                continue;
            }

            console.log(`sum of indexes ${i} and ${j} = ${nums[i] + nums[j]}`);
            //if the index of each forloop added equals our targetSum, add it to the indexes array
            if (nums[i] + nums[j] == targetSum) {
                indexes.push(i, j);
            }
        }
    }
    return indexes;
}

// console.log(twoSum(nums1, targetSum1));
console.log(twoSum(nums2, targetSum2));
// console.log(twoSum(nums3, targetSum3));