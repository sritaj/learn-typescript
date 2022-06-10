//below function will show compile error when returning the value, as obj don't specify if it will contains key type or not
function extractAndConvert(obj: object, key: string) {
  //return "Value of" + obj[key];
}

//to overcome above issue the generic type can be used, where key type can be specified keyof obj
function extractAndConvertFix<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value of" + obj[key];
}

console.log(extractAndConvertFix({ hello: "Max" }, "hello"));

//below code will throw error as key 1 is not present in the obj
//extractAndConvertFix({ hello: "Max" }, 1);
