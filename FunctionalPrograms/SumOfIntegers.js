const input = require("readline-sync")
var array = []
var i; var j; var k; var result;
var numberOfPairs = 0;
console.log("Enter Number of elements in array");
number = input.questionInt()
for (let i = 0; i < number; i++) {
    array[i] = input.questionInt()
}
console.log(calculateSum(array));

function calculateSum(arr) {
    for (i = 0; i <= arr.length - 3; i++) {
        for (j = i + 1; j <= arr.length - 2; j++) {
            for (k = j + 1; k <= arr.length - 1; k++) {
                // console.log("1st element" + arr[i]);
                // result = parseInt(arr[i]) + parseInt(arr[j]) + parseInt(arr[k]);
                if (arr[i] + arr[j] + arr[k] == 0) {
                    numberOfPairs++
                    console.log("Triplets are: " + arr[i] +" ," + arr[j] + ", " + arr[k]);
                    // }console.log("Result: " + result);
                }
                // if(result === 0){
                // }
            }
        }
        
    }
    console.log("Number of pairs that sums up to 0: " + numberOfPairs);
}