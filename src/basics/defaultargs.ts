/**
 * function to add two numbers with default arguments in typescript
 * @param {number} input1 - first number or first string
 * @param {number} input2 - second number or second string
 * @returns {number | string} - addition of input1 and input2
 */
const addWithDefaultArgs = (input1: number = 10, input2: number = 10) =>
  input1 + input2;

/**
 * function to print number in type script
 * @param {number} num - number to be printed
 * */
const printAddWithDefaultArgs = (num: number) => console.log(num);

printAddWithDefaultArgs(addWithDefaultArgs());

printAddWithDefaultArgs(addWithDefaultArgs(5, 5));
