const input = require("readline-sync")
console.log("Enter 2 points to calculate distance");

var number1 = input.questionInt()
var number2 = input.questionInt()
console.log(calculateDistance(number1, number2));

function calculateDistance(x, y){
    // console.log("Value of X: " + x);    
    var distance = Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
    console.log("Distance: " + distance);
}