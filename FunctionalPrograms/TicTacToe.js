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


    function updatedValue(r, c){
        // if(array[[r],[c]] == )
    }



    // // location = console.log(rownumber, columnnumber);
    // function updateValue(row, column) {
    //     // for (i = 0, j = 0; i <= 9; i++ , j++) {
    //     if (array[[row], [column]] == "Null") {
    //         // location = row + column
    //         // console.log(location);

    //         switch (row, column) {
    //             case '0,0':
    //                 array[[row], [column]] = "X"
    //                 console.log(updatedGrid(row, column));

    //                 break
    //             case '0,1':
    //                 console.log("Case 01");
    //                 break
    //             case '0,2':
    //                 console.log("Case 02");
    //                 break
    //             case '1,0':
    //                 console.log("Case 10");
    //                 break
    //             case '1,1':
    //                 console.log("Case 11");
    //                 break
    //             case '1,2':
    //                 console.log("Case 12");
    //                 break
    //             case '2,0':
    //                 console.log("Case 20");
    //                 break
    //             case '2,1':
    //                 console.log("Case 21");
    //                 break
    //             case '2,2':
    //                 console.log("Case 22");
    //                 break
    //         }

    //         function updatedGrid(r, c) {
    //             for (i = 0; i < 3; i++) {
    //                 for (j = 0; j < 3; j++) {
    //                     if (array[i] == r && array[j] == c) {
    //                         array[[i], [j]] = "X"
    //                     }
    //                     if(array[[i][j]] == "X" ||  array[[i][j]] == "O"){
    //                         console.log(array[[i][j]]);
    //                     }
    //                     array = console.log("Null-" + i + j);
                       
    //                     console.log(array);
    //                 }
    //             }
    //         }

    //     }
    //     //}
    // }
}