"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LoggerOne(msg) {
    return function (fe) {
        console.log("Logging..." + msg);
    };
}
let PersonExample1 = class PersonExample1 {
    constructor() {
        this.name = "Max";
        console.log("Person class instansiated");
    }
};
PersonExample1 = __decorate([
    LoggerOne("Decorator Factories Example")
], PersonExample1);
let peOne = new PersonExample1();
console.log(peOne);
console.log(peOne.name);
