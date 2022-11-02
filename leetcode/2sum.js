/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums1 = [2,7,11,15];
const target = 9;
const expected = [0,1];

var twoSum = function(nums, target) {
    
    let output = []
    
    for(let i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] == target){
                output.push(i);
                output.push(j);
            }
        }
    }
    return output;
    
};

console.log(twoSum(nums1, target));