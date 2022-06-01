"use strict";
function xcallback(n1, n2, cb) {
    let result = n1 + n2;
    cb(result);
}
xcallback(10, 10, (result) => {
    console.log(result);
});
