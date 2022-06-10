"use strict";
function extractAndConvert(obj, key) {
}
function extractAndConvertFix(obj, key) {
    return "Value of" + obj[key];
}
console.log(extractAndConvertFix({ hello: "Max" }, "hello"));
