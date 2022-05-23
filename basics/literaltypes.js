/**
 * function to  add two numbers or strings based on union & literal type feature provided by typescript
 * @param {number | string} input1 - first number or first string
 * @param {number | string} input2 - second number or second string
 * @param {as-number | as-text} resultConversation - additional parameter for the logic
 * @returns {number} - addition of input1 and input2
 */
function addInputs(input1, input2, resultConversation) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversation === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var addAges = addInputs(10, 15, "as-number");
console.log(addAges);
var addAgesPassedAsString = addInputs("10", "15", "as-number");
console.log(addAgesPassedAsString);
var addNames = addInputs("Max", "Louis", "as-text");
console.log(addNames);
