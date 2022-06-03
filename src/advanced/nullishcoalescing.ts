const u1 = null;
const u2 = undefined;
const u3 = "";
const u4 = " ";
const u5 = "   AB  ";

//examples to showcase nullish coalescing, if var has null and undefined it will be overriden by default value, if its empty string/non empty string it will remain as it as
const x1 = u1 ?? "DEFAULT OVER NULL";
const x2 = u2 ?? "DEFAULT OVER UNDEFINED";
const x3 = u3 ?? "DEFAULT OVER EMPTY STRING";
const x4 = u4 ?? "DEFAULT OVER EMPTY STRING  WITH SPACES";
const x5 = u5 ?? "DEFAULT OVER STRING";

console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
