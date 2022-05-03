/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    for(i = 0 ; i < queue.length ; i++){
        if (queue[i] == 1){
            for (j = i + 1 ; j < i + 6 ; j ++){
                if (queue[j] == 1){
                    return false
                }
                
            }
            i = j
        }
    }
    return true
}

console.log(socialDistancingEnforcer(queue2))

/*****************************************************************************/

/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.

*/

const nums1 = [-1, 5, -1, 7, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */

const nums1 = [-1, 5, -1, 7, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

function balanceIndex(nums) {
    var rightSum = 0
    var leftSum = 0
    for (i = 1 ; i < nums.length ; i++){
        for (j = nums.length - 1 ; j > i ; j --){
            // console.log(nums[j])
            rightSum += nums[j]
        }
        for (x = 0 ; x < i ; x ++){
            // console.log(nums[x])
            leftSum += nums[x]
        }
        if (rightSum == leftSum){
            return i
        }
        rightSum = 0
        leftSum = 0
    }
    return -1
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))

// ALT
// function balanceIndex(nums) {
//     // if(nums.length % 2 ==0) {    // test for even number of indices. will never have a balance point
//     //     return -1;
//     // }

//     var sumLeft = 0;    // initialize counters
//     var sumRight = 0;
//     // iterate array from the left, adding to sumLeft and comparing the rest of the array to sumLeft
//     for(let i = 0; i<nums.length; i++){
//         sumLeft += nums[i];
//         /* 
//         iterate array from the right to i+1, always leaving one index between 
//         sumLeft and sumRight as potential balance point
//         */
//         for(let j = nums.length-1; j>i+1; j--){
//             sumRight += nums[j];
//         }
//         if(sumLeft == sumRight){       // compare two sums and return index of balance point
//             return i+1;
//         }
//         sumRight = 0;       // set sumRight to 0 after each iteration from the right
//     }
//     return -1   // if no balance point, return -1
// }