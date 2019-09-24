const input = require("./utility")
console.log("Enter number of times coin is flipped")
var val = input.data.input();
console.log(val)
var heads = 0; var tails = 0;
console.log(headTail(val))

console.log(heads, tails)
console.log(calculatePercent(heads,tails))

function calculatePercent(h,t){
    if (h < t){
        var percent = (t/val)*100;
        return percent
    }else {
        var percent = (h/val)*100;
        return percent;
    }
    
}


function headTail(value){
    var i;
    for (i = 0; i < value ; i++){
        var res = Math.random()
        console.log(res)
    
        if(res < 0.5){
            tails++;
        }else {
            heads++;
        }
    }
}