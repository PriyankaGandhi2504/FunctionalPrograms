// const methods = {}


// methods.input = function()
// {
//     var val = require("readline-sync")

//     return val
// }

var methods = {}

methods.input = function () {

    var inputdata = require("readline-sync")
    var val = inputdata.question()

    return val
}
methods.stopwatch = function () {
    var d = new Date()
    return d.getSeconds()
}



methods.primerange = function (n) {
    //var i = 2;
    /*if(n % i == 0){
        console.log("2")
    }*/
    var arr = []
    for (i = 1; i <= n; i++) {
        var count = 0;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                count++

            }
        }

        if (count == 0) {
            // console.log(i)
            arr.push(i)
        }
    }
    //  console.log("Prime Numbers: "+JSON.stringify(arr))
    return arr;
}

/*
* Function to generate Random number for Gambler and to calculate win and lose percentage
*/
methods.generateRandomVariable = function (stake, goal, no_oftimes) {
    var no_ofbet = 0;            //counter to check number of bets
    var wincounter = 0; var losecounter = 0;         //counter to count number of times user wins and loses
    for (var i = 0; i < no_oftimes; i++) {
        cash = stake
        if (cash > 0 && cash != goal) {         //this loop will check if cash is > 0 and cash < goal
            no_ofbet++                             //bet is incremented
            var randomvariable = Math.random()      //random number is generated in game
            console.log(randomvariable);

            if (randomvariable < 0.5) {         //if number generated is less than 0.5 cash and win counter will be incremented
                cash++
                wincounter++
            } else {
                cash--
                losecounter++

            }
        }
    }
    console.log("Number of times User wins: " + wincounter);        //number of times user wins
    var winpercent = parseInt((wincounter / no_oftimes) * 100)      //calculating win percentage
    var losepercent = parseInt((losecounter / no_oftimes) * 100)    //calculating lose percentage
    console.log("Win Percentage: " + winpercent)
    console.log("Lose Percent : " + losepercent)

}

/*
* Euclidean Distance 
*/

methods.calculateDistance = function (x, y) {
    var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))     //sqrt(x * x + y * y)
    return distance
}


/*
* Function to generate coupons
*/

methods.generateCoupons = function (no_of_coupons) {
    var coupon = []
    for (i = 0; i < no_of_coupons; i++) {
        coupon[i] = Math.random()       //generating random coupons
        coupon[i] = parseInt(coupon[i] * (Math.pow(10, 10)))    //calculating coupon code of 10 digit each
    }
    return coupon
}


methods.compareCoupons = function (original) {
    for (i = 0; i <= original.length - 1; i++) {    //"i" is the 1st coupon 
        for (j = i + 1; j <= original.length - 1; j++) {    //"j" will compare all coupons with i
            if (original[i] == original[j]) {
                console.log(original[i] + original[j] + "is same");     //if case 2 coupons are same, it will display both coupon numbers
            }
        }
    }
    console.log("All Values are Distinct");     //in case all are different this statement will be print 
}

/*
* Harmonic Number
*/

methods.printSeries = function (num) {
    var i = ""
    var hno = 0  //harmonic number
    for (i = 1; i <= num; i++) {
        hno += 1 / i                              //calculating series for n number of times
    }
    return hno;
}

/*
* Function to calculate Power of 2
*/
methods.power = function(a,b){
    var i; var res;
        res = Math.pow(a,b)                               //power = 2^N
    
    for(i = 1; i <= 10 ; i++){
        console.log(res + " * " + i + " = " + (res*i))        //table of 2^N
    }
}

/*
* Function to calculate Prime factors
*/

methods.primeFactor = function(n) {
    for (i = 2; i * i <= n; i++) {
        while (n % i == 0) {        
            console.log(i);         
            n /= i;
        }
    }
    if (n > 2) {
        console.log(n);        //if number after dividing is greater than 2 then "i" will be incremented
    }
}

// exports.module ={

//     input : function()
//     {
//         var inputdata = require("readline-sync")
//         var val = inputdata.question()


//         return val

//     },
//     sub : function()
//     {
//         console.log("inside")
//     }
// }

exports.data = methods