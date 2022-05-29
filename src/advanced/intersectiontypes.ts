//declaring custom type
type Admin = {
  name: string;
  priviledge: string[];
};

//declaring custom type
type Employee = {
  name: string;
  startDate: Date;
};

//declaring custom type with intersection of above two
type ElevatedEmployee = Admin & Employee;

const employeeOne: ElevatedEmployee = {
  name: "max",
  priviledge: ["create-server"],
  startDate: new Date(),
};

type ComboOne = string | number;
type ComboTwo = string | boolean;

type Universal = ComboOne | ComboTwo;
