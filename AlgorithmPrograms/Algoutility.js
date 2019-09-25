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

methods.primerange = function (n) {
    //var i = 2;
    /*if(n % i == 0){
        console.log("2")
    }*/
    var arr = []
    for (i = 2; i <= n; i++) {
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
* Function to check whether the number is Palindrome or not
* An Array is passed to the function as an argument
* Each element will be reversed and checked
* If both elements are same function will return an array with all Palindrome numbers
*/


methods.isPalindrome = function (n) {
    var i; var j;
    var palindromearray = []
    if (n.length >= 2) {

        var n = n.toString()
        var n1 = n                  //Original Number
        var n2 = n.split("")
        for (i = 0, j = n2.length - 1; i <= j; i++ , j--) {
            var temp = n2[i];
            n2[i] = n2[j]
            n2[j] = temp
        }
        n2 = n2.join("")
        // console.log(n2);

        // console.log("Original Number: " + n1);
        // console.log("Reversed Number: " + n2);

        if (n1 == n2) {
            console.log(n1)
            palindromearray.push(n1)
        }

    }
    return palindromearray

}



/*
methods.isPalindrome = function(arr){
var PalindromeArray = [];
    var no; var rev = 0;
for(i = 0; i <= arr.length-1; i++){
    while(no > 0){

        var rem =no % 10
        no = parseInt(no/10)        
        rev = (rev * 10) + rem        
    }
    console.log(rev)
    if(no == rev){
        console.log("Num : " + no+" Rev"+ rev)
        PalindromeArray.push(no)
    }
}
return PalindromeArray;
}
 */






/*
methods.isAnagram = function(s1, s2)
{
    var i; var j;
    var flag = 0;                       
    if(s1.length == s2.length){         //comparing length of strings
        for (i = 0; i < s1.length; i++){
            for (j = 0; j < s2.length; j++){
                if(s1[i] == s2[j]){
                    flag = 1;           //setting flag = 1 if characters are same
                }else{
                    flag = 0;           
                }
            }
        }    
    } else {
        console.log("Strings are not of equal length")    //display if strings are not of equal length
    }
    if(flag == 1){
        return s1,s2
        //return "Is Anagram"             //after checking both strings if flag = 1, then it is an Anagram
    }else{
        
        return "Is Not Anagram"
    }
    
}
*/

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