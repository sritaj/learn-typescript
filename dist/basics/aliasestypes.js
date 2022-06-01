"use strict";
function aliasesCombine(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const aliasesCombineAges = aliasesCombine(10, 15);
console.log(aliasesCombineAges);
const aliasesCombineNames = aliasesCombine("Max", "Louis");
console.log(aliasesCombineNames);
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
