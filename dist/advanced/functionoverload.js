"use strict";
function a(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const a1 = a(1, 1);
console.log(a1);
const a2 = a("Hello ", "Windy");
console.log(a2.toUpperCase());
