/*11. Write a program ​ Distance.java t ​ hat takes two integer command-line arguments x
and y and prints the Euclidean distance from the point (x, y) to the origin (0, 0). The
formulae to calculate distance = sqrt(x*x + y*y). Use Math.power function

Author Name : Priyanka Gandhi
Date : 25/09/2019
*/

const value = require("./utility")
const input = require("readline-sync")  //to take input from user
console.log("Enter 2 points to calculate distance");

var xcoordinate = input.questionInt()       //taking x-axis point from user
var ycoordinate = input.questionInt()       //taking y-axis point from user
var distance = value.data.calculateDistance(xcoordinate, ycoordinate)           //calling a function to calculate distance        
console.log("Distance: " + distance);       //displaying result