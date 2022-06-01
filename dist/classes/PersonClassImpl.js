"use strict";
class PersonClassImpl {
    constructor(personName, age) {
        this.prefix = "Mr";
        this.name = personName;
        this.age = age;
    }
    greet(msg) {
        console.log(`${msg} ${this.name}, its your ${this.age}th birthday`);
    }
}
const bdayMsg = new PersonClassImpl("Sritaj", 32);
bdayMsg.greet("Many many happy returns of the day");
