/*14. Cross Game or Tic-Tac-Toe Game
a. Desc -> Write a Program to play a Cross Game or Tic-Tac-Toe Game. Player 1
is the Computer and the Player 2 is the user. Player 1 take Random Cell that is
the Column and Row.
b. I/P -> Take User Input for the Cell i.e. Col and Row to Mark the ‘X’
c. Logic -> The User or the Computer can only take the unoccupied cell. The Game
is played till either wins or till draw...
d. O/P -> Print the Col and the Cell after every step.
e. Hint -> The Hints is provided in the Logic. Use Functions for the Logic...

Author Name : Priyanka Gandhi
Date : 26/09/2019
*/

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
    for (i = 1; i <= 9; i++) {
        if (count % 2 == 0) {
            console.log("System generating location");
            var systemrowvalue = (Math.round(Math.random())) + 1
            console.log(systemrowvalue);

            var systemcolvalue = (Math.round(Math.random())) + 1
            console.log(systemcolvalue);

            systemvalue = [[systemrowvalue],[systemcolvalue]]                       //System's turn
            console.log(systemvalue);
            console.log(updateValue(systemrowvalue, systemcolvalue))
            // location = systemvalue
            // console.log("Location : " + location);
        } else {
            console.log("Enter row number: ");               //Users turn
            var rowNumber = input.data.input()
            console.log("Enter column Number: ");
            var columnNumber = input.data.input()
            uservalue = [[rowNumber], [columnNumber]]
            console.log(uservalue);
            console.log(updateValue(rowNumber, columnNumber))
            // location = uservalue
            // ;
        }
        count++
    }
}

function updatedValue(r, c) {
    // if(array[[r],[c]] == )
}

// // location = console.log(rownumber, columnnumber);
function updateValue(row, column) {
    // for (i = 0, j = 0; i <= 9; i++ , j++) {
    if (array[[row], [column]] == 'Null') {
        location = [[row] , [column]]
        console.log(location);

        switch (location) {
            case '00':
                console.log(updatedGrid(row, column));
                break
            case '01':
                console.log("Case 01");
                break
            case '02':
                console.log("Case 02");
                break
            case '10':
                console.log("Case 10");
                break
            case '11':
                console.log("Case 11");
                break
            case '12':
                console.log("Case 12");
                break
            case '20':
                console.log("Case 20");
                break
            case '21':
                console.log("Case 21");
                break
            case '22':
                console.log("Case 22");
                break
        }
    }
}

function updatedGrid(r, c) {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (array[i] == r && array[j] == c) {
                array[[i], [j]] = "X"
            }
            if (array[[i][j]] == "X" || array[[i][j]] == "O") {
                console.log(array[[i][j]]);
            }
            array = console.log("Null-" + i + j);

            console.log(array);
        }
    }
}