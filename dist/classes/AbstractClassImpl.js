"use strict";
class AbstractClassImpl extends AbstractClass {
    constructor() {
        super(...arguments);
        this.status = true;
    }
    displayInfo() {
        console.log(this.status);
    }
}
