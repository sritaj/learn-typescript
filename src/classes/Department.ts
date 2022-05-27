class Department {
  private name: string;
  private employee: string[] = [];

  //added example to showcase shortand of creation constructor with relevant variables along with regulr initialisation
  constructor(private id: string, n: string) {
    this.name = n;
  }

  //added example to showcase shortand of creation constructor with relevant variables
  //constructor(private id: string, private name: string, private year: string){}

  /**
   * Function to print Department name using this reference
   */
  describeDepartment() {
    console.log(
      `This ${this.name} has been established in the year 1990 and registered with ID ${this.id}`
    );
  }

  addEmployee(emp: string) {
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

//specifying name key explicitly for departChoosen object, since describeDepartment() refers to name using this keyword; and for the below context if departChoosen doesn't have any name key then once the depart function is called it won't find name specified in the global context resulting in undefined value
const departChoosen = {
  id: "XM10",
  name: "Backend Engineers",
  depart: departName.describeDepartment,
};
console.log(departChoosen.depart());
