/* 3. Leap Year
a. I/P -> Year, ensure it is a 4 digit number.
b. Logic -> Determine if it is a Leap Year.
c. O/P -> Print the year is a Leap Year or not.

Author Name : Priyanka Gandhi
Date : 23/09/2019
*/

var year="";
console.log("Enter year")
const number = require("readline-sync")
const input = require("./utility")
year = number.question();      //reading year as an input
var leapyear = isLeapYear(year)
console.log(leapyear);

function isLeapYear(y){
    if(y.length == 4){      //checking the length of input
        if(y % 4 == 0){
            if(y % 100 == 0){
                if(y % 400 == 0){
                    return "Is Leap Year";      //if year % 4, 100 and 400 == 0 then it is leap year
                }else{
                    return "Is Not Leap Year";
                }
            }else {
                return "Is Leap Year";      //if year % 4 == 0 and year % 100 != 0 then it is leap year
            }
            
        }else{
            return "Is Not Leap Year";      //if year % 4 != 0 then it is not leap year
        }
    }else {
        return "Invalid Input";           
    }
}