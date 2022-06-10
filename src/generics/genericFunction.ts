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

//for below assignment, when objB param is passed as 30 and is logged it will show only name and not age since Object.assign merge only objects
const mergeTwo = merge({ name: "May" }, 30);
console.log(mergeTwo);

//to avoid above issue, the generic type can be specified with constraints as shown below
function mergeWithConstraints<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  return Object.assign(objA, objB);
}

//the below example will show compile type error as the 2nd param expect a object type specifically
//const mergeWithConstrainstsExampleOne = mergeWithConstraints({ name: "May" }, 30);

interface Lengthy {
  length: number;
}

// generic function example by extending an interface
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got no value.";
  if (element.length === 1) {
    description = `Got 1 elements.`;
  } else if (element.length > 1) {
    description = `Got ${element.length} elements.`;
  }
  return [element, description];
}

console.log(countAndDescribe("Hi"));
console.log(countAndDescribe(""));
