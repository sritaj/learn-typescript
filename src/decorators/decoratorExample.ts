//regular decorator
function decor(_: Function) {
  console.log("Regular Logger Decorator");
}

//factory decorator
function decorOne() {
  console.log("Regular Logger Factory Decorator Function");
  return function (_: Function) {
    console.log("Regular Logger Factory Decorator");
  };
}

//factory decorator
function customHeader(title: string, hook: string) {
  console.log("Template Logger Factory");
  return function (constructor: any) {
    const p = new constructor();
    const p1 = document.getElementById(hook);
    if (p1) {
      p1.innerHTML = title;
      p1.querySelector("h1")!.textContent = p.name;
    }
  };
}

//the decor factory will be executed from bottom up for the given example, only the functions(and not the decorator) is executed based on the order which in below case is decorOne() console statement as mentioned in line 8
@decor
@decorOne()
@customHeader("<h1>Welcome To Decorators</h1>", "example")
class DecoratorExample {
  name = "May";

  constructor() {
    console.log("Initialization started");
  }
}
