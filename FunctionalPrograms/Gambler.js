/*7. Gambler
a. Desc -> Simulates a gambler who start with $stake and place fair $1 bets until
he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
times he/she wins and the number of bets he/she makes. Run the experiment N
times, averages the results, and prints them out.
b. I/P -> $Stake, $Goal and Number of times
c. Logic -> Play till the gambler is broke or has won
d. O/P -> Print Number of Wins and Percentage of Win and Loss.

Author Name : Priyanka Gandhi
Date : 24/09/2019
*/

const input = require("./utility")

var stake; var goal; var no_oftimes;
var wincounter = 0; var losecounter = 0;         //counter to count number of times user wins and loses
console.log("Enter stake");
stake = parseInt(input.data.input())        //taking stake as a user input
console.log("Enter your Goal");
goal = parseInt(input.data.input())         //user input for number of goals
console.log("Enter Number of Times");
no_oftimes = parseInt(input.data.input())   //user input for total number of trials
console.log(input.data.generateRandomVariable(stake, goal, no_oftimes));



            // }
            // if (cash == goal){
            //     wincounter++
            //     console.log("Wincounter: " + wincounter);
            // }else{
            //     losecounter++
            //     console.log("Losecounter: " + losecounter);
            // }