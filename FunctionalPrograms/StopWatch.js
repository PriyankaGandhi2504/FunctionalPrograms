const input = require("./utility")
console.log("Press any key to start calculating time");
var startofclock = input.data.input()       //accepting input from user to start watch
var starttime = input.data.stopwatch()

console.log("Press any key to stop clock : ");
var stopofclock = input.data.input()
var stoptime = input.data.stopwatch()

var elapsedtime = stoptime - starttime
console.log("Elapsed Time in seconds : " + elapsedtime);