/**
 * function to  add two numbers
 * @param {number} n1 - first number
 * @param {number} n2 - second number
 * @param {boolean} showResult - true/false
 * @param {string} msg - msg
 * @returns {number} - addition of n1+n2
 * @returns {msg} - msg passed as input param
 */
function add(n1: number, n2: number, showResult: boolean, msg: string) {
  if (showResult) {
    return n1 + n2;
  } else {
    return msg;
  }
}

//type inference - typescript automatically infers the type to be assigned and adding : <type> is redundant
const number1 = 2.3;
const number2 = 4.0;

const resultOne = add(number1, number2, false, "The func adds two params");
console.log(resultOne);

const resultTwo = add(number1, number2, true, "The func adds two params");
console.log(resultTwo);

//below example would result in addition of String and number resulting in a bug in calculation since the type is not infered while declaring the number3
let number3;
number3 = "5";

const resultThree = add(number3, 3, true, "hello");
console.log(resultThree);

//to avoid the error shown on above example the variable can be declared with type which will then cross check it on compilation
let number4: number;
//number4 = "5"; //this will throw error since type is specified
number4 = 5;

const resultFour = add(number4, 3, true, "hello");
console.log(resultFour);
