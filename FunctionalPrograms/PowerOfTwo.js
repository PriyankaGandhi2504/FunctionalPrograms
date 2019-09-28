/*4. Power of 2
a. Desc -> This program takes a command-line argument N and prints a table of the
powers of 2 that are less than or equal to 2^N.
b. I/P -> The Power Value N. ​ Only works if 0 <= N < 31 since 2^31 overflows an int
c. Logic -> repeat until i equals N.
d. O/P -> Print the year is a Leap Year or not

Author Name : Priyanka Gandhi
Date : 23/09/2019
*/

const input = require("./utility")
const num = require("readline-sync")
console.log("Enter any Number")                         
var n = num.questionInt()          //Reading a number from user                                                                            
var j = 0;
if(j <= n && n < 31){            // to check size of an integer number          
    number = input.data.power(2,n)       
    console.log(number)     //function call to calculate 2 ^ n by passing 2 and number as an argument
}else { 
    console.log("Invalid Number")
}