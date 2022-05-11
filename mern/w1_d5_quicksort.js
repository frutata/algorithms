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

function quicksort(nums = [], left = 0, right = nums.length - 1) {
    //figure out how you would recursively use partition and quicksort
    //if the start is lesss than the end , then partition the array, and store the index number that we get back in a variable
    if (left < right) {
        //recursively call quick sort for the left side and also for the right side
        let index = partition(nums, left, right);
        let leftside = quicksort(nums, left, index - 1);
        let rightside = quicksort(nums, index + 1, right);
    }
    //if the start is not less than the end, return our array
    return nums;
}

console.log(quicksort([4, -3, -9, 5, 12, -13, 21, 17, 27]))

  // partition([4, -3, -9, 5, 12, -13, 21, 17, 27]);

/*
1st quicksort call-> quicksort([9, -3, -9, 5, 12, 10, 8])
nums= [9, -3, -9, 5, 12, 10, 8]
       l                     r
l = 0;
r = 6
partition([9, -3, -9, 5, 12, 10, 8], 0, 6 )
partitioned array-> [8, -3, -9, 5, 9, 10, 12]
                                   i
index = 4

leftside quicksort call-> quicksort([8, -3, -9, 5, 9, 10, 12], 0, 3)
    nums= [8, -3, -9, 5, 9, 10, 12]
    l = 0
    r = 3
    partition([8, -3, -9, 5, 9, 10, 12], 0,3)
    partitioned array-> [5, -3, -9, 8, 9, 10, 12]
                                    i
    index = 3
    leftside quicksort call-> quicksort([5, -3, -9, 8, 9, 10, 12],0,2)


    rightside quicksort call-> quicksort([5, -3, -9, 8, 9, 10, 12, 4, 3 )


righttside quicksort call-> quicksort([8, -3, -9, 5, 9, 10, 12], 5, 6)

*/