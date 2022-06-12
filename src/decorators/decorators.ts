//Example showing Decorator
function Logger(fe: Function) {
  console.log("Logging...");
}

@Logger
class PersonExample {
  name = "Max";
  constructor() {
    console.log("Person class instansiated");
  }
}

let pe = new PersonExample();
console.log(pe);
console.log(pe.name);
