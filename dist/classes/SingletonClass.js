"use strict";
class SingletonClass {
    constructor(msg) {
        console.log(msg);
    }
    static getInstance() {
        if (SingletonClass.instance) {
            return SingletonClass.instance;
        }
        return new SingletonClass("new instance of singleton class is created");
    }
}
const initSingletonClass = SingletonClass.getInstance();
const initSingletonClass2ndTime = SingletonClass.getInstance();
