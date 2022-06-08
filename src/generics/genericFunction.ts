function mergeWithoutSpecifyingGeneric(objA: {}, objB: {}) {
  return Object.assign(objA, objB);
}

//When function like above is specified without any generic type, it doesn't carry enough information to process the information
const m = mergeWithoutSpecifyingGeneric({ name: "Max" }, { age: 30 });
console.log(m);
//below statements won't work since no type has been specified explicityly
// console.log(m.age);
// console.log(m.name);

//the above specified issue can be worked around if typecasting is done while calling the function
const m1 = mergeWithoutSpecifyingGeneric({ name: "Max" }, { age: 30 }) as {
  name: string;
  age: number;
};
console.log(m1.age);
console.log(m1.name);

//below example specifying generic approach, to add generic type information to the funtion to enable it to carry enough information for further operations
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeOne = merge({ name: "Max" }, { age: 30 });
console.log(mergeOne.age);
console.log(mergeOne.name);
