/**
 * function to  add two numbers or strings based on union type feature provided by typescript
 * @param {number | string} input1 - first number or first string
 * @param {number | string} input2 - second number or second string
 * @returns {number | string} - addition of input1 and input2
 */
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(10, 15);
console.log(combinedAges);

const combinedNames = combine("Max", "Louis");
console.log(combinedNames);
