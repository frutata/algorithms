/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
// const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
// const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
// const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
// const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
// const expected5 = "";

function combine(arr, separator) {
  var expected = ""
  for (i = 0 ; i < arr.length ; i ++) {
    if (i == arr.length - 1) {
      expected += arr[i]
    }
    else {
      expected += arr[i] + separator
    }
  }
  return expected
}

console.log(combine(arr1, separator1))
console.log(combine(arr2, separator2))
console.log(combine(arr3, separator3))
console.log(combine(arr4, separator4))
console.log(combine(arr5, separator5))


/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
// function join(arr, separator) {}

// ==============
// Book Index
// ==============
/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected2 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = "1-3, 7, 9, 15-17";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
  var str = ''
  for(var i = 0; i < nums.length; i ++) {
      if (nums[i+1] - nums[i] == 1) {
          str += nums[i];
              while(nums[i+1] - nums[i] == 1) {
                  i++;
              }
              if(i != nums.length - 1) {
                  str += '-' + nums[i] + ', ';
              }
              else{
                  str += '-' + nums[i];
              }
      }
      else if(i == nums.length - 1) {
          str += nums[i];
          break;
      }
      else{
          str += nums[i] + ', ';
      }
  }
  console.log(str);
}
bookIndex(nums1);
bookIndex(nums2);
bookIndex(nums3);