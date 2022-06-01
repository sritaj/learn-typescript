"use strict";
function add(n1, n2, showResult, msg) {
    if (showResult) {
        return n1 + n2;
    }
    else {
        return msg;
    }
}
const number1 = 2.3;
const number2 = 4.0;
const resultOne = add(number1, number2, false, "The func adds two params");
console.log(resultOne);
const resultTwo = add(number1, number2, true, "The func adds two params");
console.log(resultTwo);
let number3;
number3 = "5";
const resultThree = add(3, 3, true, "hello");
console.log(resultThree);
let number4;
number4 = 5;
const resultFour = add(number4, 3, true, "hello");
console.log(resultFour);
