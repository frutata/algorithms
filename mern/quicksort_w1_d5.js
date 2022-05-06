function partition(nums = [], left = 0, right = nums.length - 1) {
    let startval = nums[left];
    let count = left;
    for (let i = left + 1; i <= right; i++) {
        // console.log(nums[i]);
        //if the current element is less than the first element
        if (nums[i] < startval) {
            count++;
            [nums[i], nums[count]] = [nums[count], nums[i]];
        }

    }
    //move the start val into the right place by putting it at index of count
    [nums[left], nums[count]] = [nums[count], nums[left]];
    console.log(count);
    return count;
}

function quicksort(nums=[], left=0, right = nums.length-1){
    //figure out how you would recursively use partition and quicksort
    //if the start is lesss than the end , then partition the array, and store the index number that we get back in a variable
    if(left < right){
        //recursively call quick sort for the left side and also for the right side
        let index= partition(nums, left, right);
        let leftside= quicksort(nums, left, index-1 );
        let rightside= quicksort(nums, index+1, right );
    } 
    //if the start is not less than the end, return our array
    return nums;
}

console.log(quicksort([4, -3, -9, 5, 12, -13, 21, 17, 27]))

  // partition([4, -3, -9, 5, 12, -13, 21, 17, 27]);

/*
original = [4, -3, -9, 5, 12, -13, 21, 17, 27]

[-13, -3, -9, 4, 12, 5, 21, 17, 27]
.             X
[-13, -3, -9, 4, 12, 5, 21, 17, 27]
    X         x

[-13, -9, -3, 4, 12, 5, 21, 17, 27]
    X           x

[-13, -9, -3, 4, 5, 12, 21, 17, 27]
                    x

partition(4,nums.length-1)

*/