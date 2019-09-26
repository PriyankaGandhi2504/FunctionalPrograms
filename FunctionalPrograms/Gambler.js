const input = require("./utility")

var stake; var goal; var no_oftimes;
console.log("Enter stake");
stake = parseInt(input.data.input())
console.log("Enter your Goal");
goal = parseInt(input.data.input())
console.log("Enter Number of Times");
no_oftimes = parseInt(input.data.input())

var wincounter = 0; var losecounter = 0;
var broke = 0;
var no_ofbet = 0;
for (var i = 0; i < no_oftimes; i++) {
    cash = stake
    if (cash > 0 && cash != goal) {
        no_ofbet++
        var randomvariable = Math.random()
        console.log(randomvariable);

        if (randomvariable < 0.5) {
            // console.log("Random display: " + randomvariable);
            cash++
            // console.log("Cash: "+ cash);
            wincounter++
        } else {
            cash--
            losecounter++
            // }
            // if (cash == goal){
            //     wincounter++
            //     console.log("Wincounter: " + wincounter);
            // }else{
            //     losecounter++
            //     console.log("Losecounter: " + losecounter);
            // }
        }
    }
}
console.log("Number of times User wins: " + wincounter);
var winpercent = parseInt((wincounter / no_oftimes) * 100)
var losepercent = parseInt((losecounter / no_oftimes) * 100)
console.log("Win Percentage: " + winpercent)
console.log("Lose Percent : " + losepercent)