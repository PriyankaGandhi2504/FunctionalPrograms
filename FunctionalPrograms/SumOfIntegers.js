/*10. Sum of three Integer adds to ZERO
a. Desc -> A program with cubic running time. Read in N integers and counts the
number of triples that sum to exactly 0.
b. I/P -> N number of integer, and N integer input array
c. Logic -> Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0
d. O/P -> One Output is number of distinct triplets as well as the second output is to
print the distinct triplets.

Author Name : Priyanka Gandhi
Date : 25/09/2019
*/

const input = require("readline-sync")
var array = []
var i; var j; var k; var result;
var numberOfPairs = 0;
console.log("Enter Number of elements in array");
number = input.questionInt()        //Reading total number of elements in an array
console.log("Enter array elements: ");

for (let i = 0; i < number; i++) {
    array[i] = input.questionInt()      //Reading array elements
}
console.log(calculateSum(array));       //function call to calculate sum of triplets by passing array as an argument

function calculateSum(arr) {
    for (i = 0; i <= arr.length - 3; i++) {
        for (j = i + 1; j <= arr.length - 2; j++) {
            for (k = j + 1; k <= arr.length - 1; k++) {
                // console.log("1st element" + arr[i]);
                // result = parseInt(arr[i]) + parseInt(arr[j]) + parseInt(arr[k]);
                if (arr[i] + arr[j] + arr[k] == 0) {        //checking the sum of triplets
                    numberOfPairs++         //if sum is 0 then incrementing counter of pairs
                    console.log("Triplets are: " + arr[i] +" ," + arr[j] + ", " + arr[k]);
                    // }console.log("Result: " + result);
                }
                // if(result === 0){
                // }
            }
        }
        
    }
    console.log("Number of pairs that sums up to 0 is: " + numberOfPairs);
}