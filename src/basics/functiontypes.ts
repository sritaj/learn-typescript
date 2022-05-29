/**
 * function to add two numbers
 * @param {number} input1 - first number or first string
 * @param {number} input2 - second number or second string
 * @returns {number | string} - addition of input1 and input2
 */
//explicityly declaring the function return type using typescript. note: this is automaically inferred by typescript
function x(n1: number, n2: number): number {
  return n1 + n2;
}

/**
 * function to display number
 * @param {number} num - number
 */
//explicityly declaring the function return type as void using typescript. note: this is automaically inferred by typescript
function printx(num: number): void {
  console.log("Result : " + num);
}

//typescript lets to declare a varialble as Function type, however with below approach the variable doesn't know which kind of function to hold specifically and can be overwritten
let sumOfValues: Function;

sumOfValues = x;
//when this is reassigned there will be RunTime error for line 28
//sumOfValues=printx;

console.log(sumOfValues(8, 8));

//to overcome above issue, the variable can be specified with what kind of parameters is used for the function and the return type
let sumOfValuesApproachTwo: (n1: number, n2: number) => number;

//the assignment below will not work and will throw compile type error
//sumOfValuesApproachTwo=printx
sumOfValuesApproachTwo = x;
