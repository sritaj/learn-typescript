"use strict";
const u1 = null;
const u2 = undefined;
const u3 = "";
const u4 = " ";
const u5 = "   AB  ";
const x1 = u1 !== null && u1 !== void 0 ? u1 : "DEFAULT OVER NULL";
const x2 = u2 !== null && u2 !== void 0 ? u2 : "DEFAULT OVER UNDEFINED";
const x3 = u3 !== null && u3 !== void 0 ? u3 : "DEFAULT OVER EMPTY STRING";
const x4 = u4 !== null && u4 !== void 0 ? u4 : "DEFAULT OVER EMPTY STRING  WITH SPACES";
const x5 = u5 !== null && u5 !== void 0 ? u5 : "DEFAULT OVER STRING";
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
