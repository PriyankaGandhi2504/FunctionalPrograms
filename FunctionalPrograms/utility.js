// const methods = {}


// methods.input = function()
// {
//     var val = require("readline-sync")
    
//     return val
// }

var methods = {}

methods.input = function(){
   
         var inputdata = require("readline-sync")
         var val = inputdata.question()

         return val
}

methods.primerange = function(n)
{
    //var i = 2;
    /*if(n % i == 0){
        console.log("2")
    }*/
var arr=[]
    for (i = 1; i <= n; i++){
       var count =0;
        for (j = 2; j <= i/2 ; j++){
            if (i % j == 0){
                count++
                  
            }
        }
           
        if(count == 0){
           // console.log(i)
            arr.push(i)
        }  
    }
  //  console.log("Prime Numbers: "+JSON.stringify(arr))
    return arr;
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