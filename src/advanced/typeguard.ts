//declaring custom type
type AdminEmp = {
  name: string;
  priviledge: string[];
};

//declaring custom type
type RegEmp = {
  name: string;
  startDate: Date;
};

//declaring custom type with intersection of above two
type ElevatedEmp = AdminEmp | RegEmp;

const empOne: ElevatedEmp = {
  name: "max",
  priviledge: ["create-server"],
  startDate: new Date(),
};

//creating function to display the employee information based on type safety
function printEmpInformation(emp: ElevatedEmp) {
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

//classes below demonstrating typeguard examples
class Car {
  drive() {
    console.log("Drive that Car ...");
  }
}

class Truck {
  drive() {
    console.log("Drive that Truck ...");
  }

  cargoLoad(load: number) {
    console.log(`Load for the Truck is ${load}`);
  }
}

type Vehicle = Car | Truck;

let vehicleOne = new Car();
let vehicleTwo = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.cargoLoad(1000);
  }
}

useVehicle(new Car());
useVehicle(new Truck());
