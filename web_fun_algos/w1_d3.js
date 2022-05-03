// 1
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);

//PRINTS I should bring: sunglasses, a coat, and a smile!

// 2
for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");

//PRINTS 10, 9, 8, 7, 6, 5, 4, 3, ignition!, 1, liftoff!

// 3
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// your code here!
    
console.log("there are " + countPositives + " positive values");

//PRINTS there are 0 positive values
