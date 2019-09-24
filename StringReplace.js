// var readline = require('readline');
// var fs = require('fs');
// console.log(readline, fs);
// var input=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
//  var name=input.question('Enter your name:')

const input = require("./utility")

// var val = input.module.input()
console.log("Hello <Username> , How are you?")
console.log("Enter Your Username ")
var val = input.data.input()
console.log("Entered Username : " + val)
console.log(stringReplace(val))

function stringReplace(str){
    if (val.length <= 3){
        return "Invalid Input"
    }
    console.log("Hello " + str + " , How are you?")
}