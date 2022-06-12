//Example showing Decorator factory
function LoggerOne(msg: string) {
  return function (fe: Function) {
    console.log("Logging..." + msg);
  };
}

@LoggerOne("Decorator Factories Example")
class PersonExample1 {
  name = "Max";
  constructor() {
    console.log("Person class instansiated");
  }
}

let peOne = new PersonExample1();
console.log(peOne);
console.log(peOne.name);
