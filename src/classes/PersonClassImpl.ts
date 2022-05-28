/**
 * Class implementing interface and providing concrete implementation
 */
class PersonClassImpl implements Person {
  name: string;
  age: number;

  constructor(personName: string, age: number) {
    this.name = personName;
    this.age = age;
  }

  greet(msg: string): void {
    console.log(`${msg} ${this.name}, its your ${this.age}th birthday`);
  }
}

const bdayMsg = new PersonClassImpl("Sritaj", 32);
bdayMsg.greet("Many many happy returns of the day");
