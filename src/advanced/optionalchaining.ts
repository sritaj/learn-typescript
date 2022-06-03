const jobDesc = {
  designation: "Associate Architect II",
  salary: "$350000",
  empCode: {
    code: 101,
    type: "permanent",
  },
};

console.log(jobDesc);
//using && operator to validate if the left hand component exists before going and printing the one in the right hand side
console.log(jobDesc.empCode && jobDesc.empCode.code);
//using optional chaining to validate if the component are present in the object
console.log(jobDesc?.empCode?.type);
