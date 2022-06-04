"use strict";
var _a;
const jobDesc = {
    designation: "Associate Architect II",
    salary: "$350000",
    empCode: {
        code: 101,
        type: "permanent",
    },
};
console.log(jobDesc);
console.log(jobDesc.empCode && jobDesc.empCode.code);
console.log((_a = jobDesc === null || jobDesc === void 0 ? void 0 : jobDesc.empCode) === null || _a === void 0 ? void 0 : _a.type);
