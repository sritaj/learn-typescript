/**
 * function to add two numbers
 * @param {number} n1 - first number or first string
 * @param {number} n2 - second number or second string
 * @param {(number)=>void} cb - callback function
 */
//declaring callback function using typescript to specify parameters and return type
function xcallback(n1: number, n2: number, cb: (n: number) => void) {
  let result = n1 + n2;
  cb(result);
}

xcallback(10, 10, (result) => {
  console.log(result);
});
