class Department {
  private name: string;
  private employee: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  /**
   * Function to print Department name using this reference
   */
  describeDepartment() {
    console.log(`This ${this.name} has been established in the year 1990`);
  }

  addEmployee(emp: string) {
    this.employee.push(emp);
  }

  printEmployee() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

const departName = new Department("Quality Engineer");
departName.describeDepartment();
console.log(departName);
departName.addEmployee("Sritaj");
departName.addEmployee("Max");

departName.printEmployee();

//specifying name key explicitly for departChoosen object, since describeDepartment() refers to name using this keyword; and for the below context if departChoosen doesn't have any name key then once the depart function is called it won't find name specified in the global context resulting in undefined value
const departChoosen = {
  name: "Backend Engineers",
  depart: departName.describeDepartment,
};
console.log(departChoosen.depart());
