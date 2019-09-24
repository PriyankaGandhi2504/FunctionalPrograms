var hn = 1
console.log("Enter a Harmonic Number")
const input = require("./utility")
var n = input.data.input()                      //Reading data from user
console.log(printSeries(n))


function printSeries(num){
    var i=""
    var hno = 0  //harmonic number
    for (i = 1 ; i <= num ; i++){
        hno += 1/i                              //calculating series for n number of times
    }
    return hno;
}