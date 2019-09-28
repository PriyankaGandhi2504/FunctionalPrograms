/*5. Harmonic Number
a. Desc -> Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
(http://users.encs.concordia.ca/~chvatal/notes/harmonic.html).
b. I/P -> The Harmonic Value N. ​ Ensure N != 0
c. Logic -> compute 1/1 + 1/2 + 1/3 + ... + 1/N
d. O/P -> Print the Nth Harmonic Value.

Author Name : Priyanka Gandhi
Date : 24/09/2019
*/

var hn = 1
console.log("Enter a Harmonic Number")
const number = require("readline-sync")
const input = require("./utility")
var n = number.questionInt()                      //Reading data from user
var result = input.data.printSeries(n)
console.log(result)     //calling a function to calculate and print series by passing number as an argument