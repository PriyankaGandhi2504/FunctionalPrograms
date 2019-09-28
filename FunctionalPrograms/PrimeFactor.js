/*6. Factors
Desc -> Computes the prime factorization of N using brute force.
I/P -> Number to find the prime factors
Logic -> Traverse till i*i <= N instead of i <= N for efficiency​ .
O/P -> Print the prime factors of number N.

Author Name : Priyanka Gandhi
Date 24/09/2019
*/

console.log("Enter any Number")
const num = require("readline-sync")
const input = require("./utility")
var number = num.questionInt()        //reading a number from user

// console.log(primeFactor(num)) 
var factors = input.data.primeFactor(number)
console.log(factors);
//calling a function to calculate factors by passing number as an argument