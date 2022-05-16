/* 
Recreate Object.entries method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};

const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };

  // This object contains inherited key value pairs from the above proto obj.
const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
});

const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

/**
   * Returns a 2d array of key value pairs from the given obj.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object} obj
   * @typedef {Array<Array<string, any>>} output The nested array should look
   *    like [key, val]
   * @returns {output}
   */
function entries(obj) {
    let result = [];
    //iterate through our object
    for (const key in obj) {
        // console.log(`${key}:${obj[key]}`);
        //create a temp array inside the for loop
        let temp = [key, obj[key]];
        //push the temp array inside the result array
        result.push(temp);
    }
    return result;
}


console.log(entries(obj1));
/*****************************************************************************/
