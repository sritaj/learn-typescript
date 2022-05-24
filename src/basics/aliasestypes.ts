//declaring custom alias for number | string using typescript
type Combinable = number | string;

/**
 * function to  add two numbers or strings based on alias type provided by typescript
 * @param {Combinable} input1 - first number or first string
 * @param {Combinable} input2 - second number or second string
 * @returns {number | string} - addition of input1 and input2
 */
function aliasesCombine(input1: Combinable, input2: Combinable) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const aliasesCombineAges = aliasesCombine(10, 15);
console.log(aliasesCombineAges);

const aliasesCombineNames = aliasesCombine("Max", "Louis");
console.log(aliasesCombineNames);

//declaring custom alias for object using typescript
type User = { name: string; age: number };

/**
 * function to print username
 * @param {user} User - user object
 */
function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

/**
 * function to check user age
 * @param {user} User - user object
 * @param {checkAge} number - age to be combared
 * @return - true/false
 */
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
