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
const mergeTwo = merge({ name: "May" }, 30);
console.log(mergeTwo);
function mergeWithConstraints(objA, objB) {
    return Object.assign(objA, objB);
}
function countAndDescribe(element) {
    let description = "Got no value.";
    if (element.length === 1) {
        description = `Got 1 elements.`;
    }
    else if (element.length > 1) {
        description = `Got ${element.length} elements.`;
    }
    return [element, description];
}
console.log(countAndDescribe("Hi"));
console.log(countAndDescribe(""));
