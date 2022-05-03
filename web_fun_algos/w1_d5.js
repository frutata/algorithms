// 1
var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);

//PRINTS apples and apples

// 2

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

//PRINTS apples and oranges

// 3
var start = 0;
var end = 12;

while (start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

// 4
function reverse(arr) {
    var newArr = [];
    for (j = arr.length - 1; j >= 0; j--) {
        newArr += arr[j];
    }
    return newArr
}

console.log(reverse(["a","b","c"]))