const input = require("readline-sync")
var number_of_coupons = input.questionInt()
var coupon = []; var duplicate = []
var i
console.log(generateCoupons(number_of_coupons));

function generateCoupons(no_of_coupons) {
    for (i = 0; i < number_of_coupons; i++) {
        coupon[i] = Math.random()
        coupon[i] = parseInt(coupon[i] * (Math.pow(10, 10)))
    }
    console.log(coupon);
    // duplicate = coupon;
    // console.log(duplicate);
    console.log(compareCoupons(coupon));

    function compareCoupons(original) {
        for (i = 0; i <= original.length - 1; i++) {
            for (j = i + 1; j <= original.length - 1; j++) {
                if (original[i] == original[j]) {
                    console.log(original[i] + original[j] + "is same");
                }
            }
        }
        console.log("All Values are Distinct");
        
    }
}