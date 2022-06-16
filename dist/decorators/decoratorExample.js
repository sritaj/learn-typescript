"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decor(_) {
    console.log("Regular Logger Decorator");
}
function decorOne() {
    console.log("Regular Logger Factory Decorator Function");
    return function (_) {
        console.log("Regular Logger Factory Decorator");
    };
}
function customHeader(title, hook) {
    console.log("Template Logger Factory");
    return function (constructor) {
        const p = new constructor();
        const p1 = document.getElementById(hook);
        if (p1) {
            p1.innerHTML = title;
            p1.querySelector("h1").textContent = p.name;
        }
    };
}
let DecoratorExample = class DecoratorExample {
    constructor() {
        this.name = "May";
        console.log("Initialization started");
    }
};
DecoratorExample = __decorate([
    decor,
    decorOne(),
    customHeader("<h1>Welcome To Decorators</h1>", "example")
], DecoratorExample);
