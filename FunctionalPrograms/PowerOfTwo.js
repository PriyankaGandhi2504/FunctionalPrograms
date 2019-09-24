const input = require("./utility")
console.log("Enter any Number")                         //Reading a number from user
var n = input.data.input()
var j = 0;
if(j <= n && n < 31){                                  
    console.log(power(2,n))
}else { 
    console.log("Invalid Number")
}


function power(a,b){
    var i; var res;
        res = Math.pow(a,b)                               //power = 2^N
    
    for(i = 1; i <= 10 ; i++){
        console.log(res + "*" + i + "=" + (res*i))        //table of 2^N
    }
}