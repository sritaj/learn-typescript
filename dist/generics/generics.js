"use strict";
let arr1 = [];
let arr2 = [];
let arr3 = [];
arr1 = ["hello", "hi"];
arr2 = [1, "sample", true];
arr3 = [12, 34, 23];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Promise");
    }, 2000);
});
promise.then((data) => {
    data.toUpperCase();
});
