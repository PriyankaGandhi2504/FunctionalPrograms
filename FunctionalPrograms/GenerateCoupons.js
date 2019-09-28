/*8. Coupon Numbers
a. Desc -> Given N distinct Coupon Numbers, how many random numbers do you
need to generate distinct coupon number? This program simulates this random
process.
b. I/P -> N Distinct Coupon Number
c. Logic -> repeatedly choose a random number and check whether it's a new one.
d. O/P -> total random number needed to have all distinct numbers.
e. Functions => Write Class Static Functions to generate random number and to
process distinct coupons.

Author Name : Priyanka Gandhi
Date 24/09/2019
*/

const input = require("readline-sync")
const value = require("./utility")
console.log("Enter Number of Coupons to generate");
var number_of_coupons = input.questionInt()     //taking user to input for the number of coupons to generate
var coupon = []; var i;
var generatecoupon = value.data.generateCoupons(number_of_coupons)
console.log(generatecoupon);    //passing number of coupons as a parameter to generate coupons
// console.log(coupon);
var comparecoupons = value.data.compareCoupons(coupon)
console.log(comparecoupons);    //calling a function to compare all coupons by passing coupon as a parameter