"use strict";
const addWithDefaultArgs = (input1 = 10, input2 = 10) => input1 + input2;
const printAddWithDefaultArgs = (num) => console.log(num);
printAddWithDefaultArgs(addWithDefaultArgs());
printAddWithDefaultArgs(addWithDefaultArgs(5, 5));
