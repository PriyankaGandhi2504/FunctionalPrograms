console.log("Enter any Number")
const input = require("./utility")
var num = input.data.input()

console.log(primeFactor(num))
function primeFactor(n) {
    for (i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            console.log(i);
            n /= i;
        }
    }
    if (n > 2) {
        console.log(n);
    }
}





