/**
 * Declaring interface(supported in only typescript)
 */
interface Person {
  name: string;
  age: number;
  readonly prefix: string;

  greet(msg: string): void;
}

//example showcasing usage of interface when creation of object with the interface type
let bday: Person;

bday = {
  name: "Sritaj Kumar Patel",
  age: 32,
  prefix: "Mr",
  greet(msg: string): void {
    console.log(
      `${msg} ${this.prefix} ${this.name}, its your ${this.age}th birthday`
    );
  },
};

bday.greet("Many Many Many Happy Returns of the day");

//as prefix is set to readonly, the value once set cannot be changed
//bday.prefix = "Master";
