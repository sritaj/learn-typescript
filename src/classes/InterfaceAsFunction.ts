/**
 * Interface as custom Function example
 */
interface InterfaceAsFunction {
  (a: number, b: number): number;
}

let customFunc: InterfaceAsFunction;

customFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(customFunc(2, 2));
