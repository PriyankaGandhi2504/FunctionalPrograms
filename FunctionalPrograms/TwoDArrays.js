// const util = require("util-deprecate")

const input = require("./utility")
console.log("Enter number of Rows: ");
var r = input.data.input();
console.log("Enter number of Cols: ");
var c = input.data.input();
console.log("Enter the type of Array: Integer/ Doubles/ Boolean");
var arraytype = input.data.input()
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
    console.log(" ")
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
