const input = require("./utility")
var i; var j;

var location; var array = [[], []]
var i; var j;
var count = 1; var systemvalue = 0; var uservalue = 0;

console.log(displayGrid());
console.log(generateLocation(count));

function displayGrid() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            var array = [[i], [j]]
            array = console.log("Null-" + i + j);
        }
        console.log();
    }
}

function generateLocation(cnt) {
    while (count < 9) {
        if (count % 2 == 0) {
            console.log("System generating location");
            var systemrowvalue = (Math.round(Math.random())) + 1
            console.log(systemrowvalue);

            var systemcolvalue = (Math.round(Math.random())) + 1
            console.log(systemcolvalue);

            systemvalue = [[systemrowvalue], [systemcolvalue]]                         //System's turn
            console.log(systemvalue);
            console.log(updateValue(systemrowvalue, systemcolvalue))
            // location = systemvalue
            // console.log("Location : " + location);
        } else {
            console.log("Enter row number: ");               //Users turn
            var rowNumber = input.data.input()
            console.log("Enter column Number: ");
            var columnNumber = input.data.input()
            // uservalue = [[rowNumber], [columnNumber]]
            // console.log(uservalue);
            console.log(updateValue(rowNumber, columnNumber))
            // location = uservalue
            // ;
        }
        count++
    }

    // location = console.log(rownumber, columnnumber);
    function updateValue(row, column) {
        for (i = 0, j = 0; i <= 9; i++ , j++) {
            if (array[[row], [column]] == "Null") {
                location = row + column
                console.log(location);

                switch (location) {
                    case 00:
                        console.log("Case 00");
                        break
                    case 01:
                        console.log("Case 01");
                        break
                    case 02:
                        console.log("Case 02");
                        break
                    case 10:
                        console.log("Case 10");
                        break
                    case 11:
                        console.log("Case 11");
                        break
                    case 12:
                        console.log("Case 12");
                        break
                    case 20:
                        console.log("Case 20");
                        break
                    case 21:
                        console.log("Case 21");
                        break
                    case 22:
                        console.log("Case 22");
                        break
                }

            }
        }
    }
}