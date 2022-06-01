"use strict";
class Department {
    constructor(id, n, level = "intermediate") {
        this.id = id;
        this.level = level;
        this.employee = [];
        this.name = n;
        this.certifiedBy = "TMZ Labs";
    }
    describeDepartment() {
        console.log(`This ${this.name} has been established in the year 1990 and registered with ID ${this.id} and certified by ${this.certifiedBy} with level ${this.level}`);
    }
    addEmployee(emp) {
        this.employee.push(emp);
    }
    printEmployee() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
const departName = new Department("1XA", "Quality Engineer");
departName.describeDepartment();
console.log(departName);
departName.addEmployee("Sritaj");
departName.addEmployee("Max");
departName.printEmployee();
const departChoosen = {
    id: "XM10",
    certifiedBy: "dmz corp",
    level: "beginner",
    name: "Backend Engineers",
    depart: departName.describeDepartment,
};
console.log(departChoosen.depart());
