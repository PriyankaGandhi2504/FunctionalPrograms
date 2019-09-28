/* 1. User Input and Replace String Template “Hello <<UserName>>, How are you?”
a. I/P​ -> Take User Name as Input. ​ Ensure UserName has min 3 char
b. Logic​ -> Replace <<UserName>> with the proper name
c. O/P​ -> Print the String with User Name 

Author Name : Priyanka Gandhi
Date : 23/09/2019
*/


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
var val = input.data.input()        //Reading Username as an User input
console.log("Entered Username : " + val)
console.log(stringReplace(val))     //calling a fucntion to replace string by passing value as an argument

function stringReplace(str){
    if (val.length <= 3){           //validating string length
        return "Invalid Input"
    }
    console.log("Hello " + str + " , How are you?")     //displaying replaced string
}