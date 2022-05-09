/* 
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).
Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7, 9, 10, 11, 12];
//              i
const numsB1 = [2, 2, 6, 6, 7, 9, 14];
//              j
const expected1 = [2, 7];

//[2,7]

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {

    let newNums = [];
    let i = 0;
    let j = 0;
    //as long as i is within the bounds of its array and j is within the bounds of its array, enter the loop

    while (i < sortedA.length && j < sortedB.length){
        // if the two values are equal
        if (sortedA[i] == sortedB[j]){
            //push to the new nums array only IF the last value in newNums array is not equal to the current matching value 
            //if the newNums does not include the current value, then push the value to newNums
            if (!newNums.includes(sortedA[i])){
                newNums.push(sortedA[i]);
            }
            i ++;
            j ++;
        }

        // if the values are not equal we want to increase whichever variable has a lower value than the other
        else if (sortedA[i] < sortedB[j]){
            i ++;
        }

        else if (sortedB[j] < sortedA[i]){
            j ++;
        }
    }
    // after exiting the while loop we want to return our new array containing the matching values
    return newNums;


}


console.log(orderedIntersection(numsA1,numsB1));
console.log(orderedIntersection(numsA2,numsB2));
console.log(orderedIntersection(numsA3,numsB3));

/*****************************************************************************/