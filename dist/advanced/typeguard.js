"use strict";
const empOne = {
    name: "max",
    priviledge: ["create-server"],
    startDate: new Date(),
};
function printEmpInformation(emp) {
    console.log(emp.name);
    if ("priviledge" in emp) {
        console.log(emp.priviledge);
    }
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
}
printEmpInformation(empOne);
printEmpInformation({ name: "May", startDate: new Date() });
printEmpInformation({ name: "Dawn", priviledge: ["gym-trainer]"] });
class Car {
    drive() {
        console.log("Drive that Car ...");
    }
}
class Truck {
    drive() {
        console.log("Drive that Truck ...");
    }
    cargoLoad(load) {
        console.log(`Load for the Truck is ${load}`);
    }
}
let vehicleOne = new Car();
let vehicleTwo = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.cargoLoad(1000);
    }
}
useVehicle(new Car());
useVehicle(new Truck());
