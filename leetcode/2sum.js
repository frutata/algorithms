/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let sums1 = [2,7,11,15];
let output1 = 9;
let expected1 = [0,1];

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

console.log(twoSum(sums1, output1));