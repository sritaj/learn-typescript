/**
 * Declaring interface(supported in only typescript)
 */
interface Person {
  name: string;
  age: number;

  greet(msg: string): void;
}

//example showcasing usage of interface when creation of object with the interface type
let bday: Person;

bday = {
  name: "Sritaj Kumar Patel",
  age: 32,
  greet(msg: string): void {
    console.log(`${msg} ${this.name}, its your ${this.age}th birthday`);
  },
};

bday.greet("Many Many Many Happy Returns of the day");
