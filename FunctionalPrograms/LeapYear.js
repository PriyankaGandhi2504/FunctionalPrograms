var year="";
console.log("Enter year")
const input = require("./utility")
year = input.data.input();
console.log(isLeapYear(year));

function isLeapYear(y){
    if(y.length == 4){
        if(y % 4 == 0){
            if(y % 100 == 0){
                if(y % 400 == 0){
                    return "Is Leap Year";
                }else{
                    return "Is Not Leap Year";
                }
            }else {
                return "Is Leap Year";
            }
            
        }else{
            return "Is Not Leap Year";
        }
    }else {
        return "Invalid Input";
    }
}