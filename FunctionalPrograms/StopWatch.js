/*13. Simulate Stopwatch Program
a. Desc -> Write a Stopwatch Program for measuring the time that elapses between
the start and end clicks
b. I/P -> Start the Stopwatch and End the Stopwatch
c. Logic -> Measure the elapsed time between start and end
d. O/P -> Print the elapsed time.

Author Name : Priyanka Gandhi
Date : 25/09/2019
 */

const input = require("./utility")
console.log("Press any key to start calculating time");
var startofclock = input.data.input()       //accepting input from user to start watch
var starttime = input.data.stopwatch()

console.log("Press any key to stop clock : ");
var stopofclock = input.data.input()
var stoptime = input.data.stopwatch()       //reading input from user to stop watch

var elapsedtime = stoptime - starttime      //formula to calculate time taken for execution
console.log("Elapsed Time in seconds : " + elapsedtime);