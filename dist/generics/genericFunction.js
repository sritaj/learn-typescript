"use strict";
function mergeWithoutSpecifyingGeneric(objA, objB) {
    return Object.assign(objA, objB);
}
const m = mergeWithoutSpecifyingGeneric({ name: "Max" }, { age: 30 });
console.log(m);
const m1 = mergeWithoutSpecifyingGeneric({ name: "Max" }, { age: 30 });
console.log(m1.age);
console.log(m1.name);
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeOne = merge({ name: "Max" }, { age: 30 });
console.log(mergeOne.age);
console.log(mergeOne.name);
