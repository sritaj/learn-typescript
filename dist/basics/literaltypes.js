"use strict";
function addLiteralTypeInputs(input1, input2, resultConversation) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversation === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const addAgesLiteralTypes = addLiteralTypeInputs(10, 15, "as-number");
console.log(addAgesLiteralTypes);
const addAgesPassedAsStringLiteralTypes = addLiteralTypeInputs("10", "15", "as-number");
console.log(addAgesPassedAsStringLiteralTypes);
const addNamesLiteralTypes = addLiteralTypeInputs("Max", "Louis", "as-text");
console.log(addNamesLiteralTypes);
