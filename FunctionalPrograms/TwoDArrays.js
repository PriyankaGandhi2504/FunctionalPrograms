/*9. 2D Array
a. Desc -> A library for reading in 2D arrays of integers, doubles, or booleans from
standard input and printing them out to standard output.
b. I/P -> M rows, N Cols, and M * N inputs for 2D Array. Use Java Scanner Class
c. Logic -> create 2 dimensional array in memory to read in M rows and N cols
d. O/P -> Print function to print 2 Dimensional Array. In Java use PrintWriter with
OutputStreamWriter to print the output to the screen.

Author Name : Priyanka Gandhi
Date : 25/09/2019
*/

// const util = require("util-deprecate")
const input = require("./utility")
console.log("Enter number of Rows: ");
var r = input.data.input();     //Reading number of rows of array
console.log("Enter number of Cols: ");
var c = input.data.input();     //Reading number of columns of array
console.log("Enter the type of Array: Integer/ Doubles/ Boolean");
var arraytype = input.data.input()      //Selecting type of an array
switch (arraytype) {
    case 'Integer':
        console.log(displayIntegerArray(r, c));
        break
    case 'Doubles':
        console.log(displayDoublesArray(r, c));
        break
    case 'Boolean':
        console.log(displayBooleanArray(r, c));
        break
}


function displayIntegerArray(row, col) {
    var i; var j;
    console.log("Enter Array Elements ");
    var arr = []; var matrix = []
    for (i = 1; i <= row; i++) {
        for (j = 1; j <= col; j++) {
            //arr = arr[i] + arr[j]
            // arr[[i], [j]] = 
            arr.push(input.data.input())

        }
        // matrix.push(arr)
       
        // console.write();
    }
    console.log(arr);
    // console.log(matrix);
    // matrix = []
    // console.log(" ")
    // util.print(arr[[i],[j]])
}


function displayDoublesArray(row, col) {
    var i; var j;
    console.log("Enter Array Elements ");
    var arr = []
    for (i = 1; i <= row; i++) {
        for (j = 1; j <= col; j++) {
            //arr = arr[i] + arr[j]
            arr[[i], [j]] = input.data.input()
        }
        console.log();
        // console.write();
    }
    console.log(arr)
    // util.print(arr[[i],[j]])
}


function displayBooleanArray(row, col) {
    var i; var j;
    console.log("Enter Array Elements ");
    var arr = []
    for (i = 1; i <= row; i++) {
        for (j = 1; j <= col; j++) {
            //arr = arr[i] + arr[j]
            arr[[i], [j]] = input.data.input()
        }
        console.log();
        // console.write();
    }
    console.log(" ")
    // util.print(arr[[i],[j]])
}
