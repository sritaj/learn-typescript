"use strict";
let bday;
bday = {
    name: "Sritaj Kumar Patel",
    age: 32,
    prefix: "Mr",
    greet(msg) {
        console.log(`${msg} ${this.prefix} ${this.name}, its your ${this.age}th birthday`);
    },
};
bday.greet("Many Many Many Happy Returns of the day");
