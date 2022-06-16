"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Log(target, propertyName) {
    console.log("Property Decorator");
    console.log(target, propertyName);
}
function LogTwo(target, name, descriptor) {
    console.log("Accessor Decorator");
    console.log(target, name, descriptor);
}
function LogThree(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target, name, descriptor);
}
function LogFour(target, name, position) {
    console.log("Parameter Decorator");
    console.log(target, name, position);
}
class ProductExample {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    setPrice(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid Price - should be positive!");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], ProductExample.prototype, "title", void 0);
__decorate([
    LogTwo
], ProductExample.prototype, "setPrice", null);
__decorate([
    LogThree,
    __param(0, LogFour)
], ProductExample.prototype, "getPriceWithTax", null);
