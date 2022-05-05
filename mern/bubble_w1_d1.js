/*
https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

Stable sort

Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
Space: O(1) constant.
For review, create a function that uses BubbleSort to sort an unsorted array in-place.
For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function bubbleSort(nums) {
    for (let j = 0 ; j < nums.length ; j ++) {
        // j for loop helps us reuse the i for loop and iterate one less through the i for loop each time to cut down on time
        for(let i = 0 ; i < nums.length - j ; i ++) {
            // if the current index element is greater then the next index element, we want to swap their positions
            if (nums[i] > nums[i + 1]) {
                // swaps index positions
                [nums[i],nums[i+1]] = [nums[i + 1], nums[i]] ;
            }
        }
    }
    return nums
}

// the value of the function call is whatever that func call returns
console.log(bubbleSort(numsRandomOrder))

// if we wanted to do this recursively:

// function bubbleSort(arr, count){
//     var temp;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > arr[i+1]){
//             temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//         }
//     }
//     if(count == arr.length){
//         return arr
//     }
//     count++
//     return bubbleSort(arr, count)
// }