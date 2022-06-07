//examples for showcasing generic type
let arr1: Array<string> = [];
let arr2: Array<any> = [];
let arr3: Array<number> = [];

arr1 = ["hello", "hi"];
arr2 = [1, "sample", true];
arr3 = [12, 34, 23];

//showcasing generic type usage with Promise
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Promise");
  }, 2000);
});

promise.then((data) => {
  data.toUpperCase();
});
