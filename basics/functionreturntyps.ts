/**
 * function to add two numbers
 * @param {number} input1 - first number or first string
 * @param {number} input2 - second number or second string
 * @returns {number | string} - addition of input1 and input2
 */
//explicityly declaring the function return type using typescript. note: this is automaically inferred by typescript
function one(n1: number, n2: number): number {
  return n1 + n2;
}

/**
 * function to display number
 * @param {number} num - number
 */
//explicityly declaring the function return type as void using typescript. note: this is automaically inferred by typescript
function two(num: number): void {
  console.log("Result : " + num);
}

/**
 * function to display number
 * @param {number} num - number
 */
//explicityly declaring the function return type as undefined using typescript. when it is declared as undefined the return statement is needed to be added at end
function three(num: number): undefined {
  console.log("Result : " + num);
  return;
}
