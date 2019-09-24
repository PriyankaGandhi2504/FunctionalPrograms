console.log("Enter any Number")
const input = require("./utility")
var num = input.data.input()

console.log(primeFactor(num))


function primeFactor(n){
    var i = 2;
    while(i <= n){
        if(n % 2 == 1){
            console.log(i)
            if(n % i == 0){
                console.log(i)
            }
        }
        i++;
    }
   
}

