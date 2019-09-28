/*2. Flip Coin and print percentage of Heads and Tails
a. I/P -> The number of times to Flip Coin. ​ Ensure it is positive integer ​ .
b. Logic -> Use Random Function to get value between 0 and 1. If < 0.5 then tails or
heads
c. O/P -> Percentage of Head vs Tails

Author Name : Priyanka Gandhi
Date : 23/09/2019
*/

const input = require("./utility")
const number = require("readline-sync")
console.log("Enter number of times coin is flipped")
var val = number.questionInt();       //taking user input for number of times coin should be flipped
console.log(val)
var heads = 0; var tails = 0;
var probability = headTail(val)         //calling a function to check probability of heads and tails
console.log(probability)          

console.log("Count of Head: " + heads + " Count of Tails: " + tails)
var percentage = calculatePercent(heads, tails)         //function call to calculate percent of heads and tails count
console.log(percentage)  

function calculatePercent(h, t) {         //h = heads, t = tails
    if (h < t) {
        var percent = (t / val) * 100;
        console.log("Tails Percent: " + percent);

    } else {
        var percent = (h / val) * 100;
        console.log("Heads Percent: " + percent);
    }
}


function headTail(value) {
    var i;
    for (i = 0; i < value; i++) {
        var res = Math.random()         //generating random value
        console.log(res)

        if (res < 0.5) {          //if value generated is less than 0.5 then tails counter will be incremented
            tails++;
        } else {
            heads++;            //else heads counter will be incremented
        }
    }
}