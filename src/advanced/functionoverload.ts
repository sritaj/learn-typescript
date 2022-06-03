/**
 * Example showcasing function overload
 */
function a(a: number, b: number): number;
function a(a: string, b: string): string;
function a(a: string | number, b: string | number) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const a1 = a(1, 1);
console.log(a1);

//if function overload is not utilized and func at line 6 is directly called then typescript won't know accurately if it is number or string type and string operations cannot be performed
const a2 = a("Hello ", "Windy");
console.log(a2.toUpperCase());
