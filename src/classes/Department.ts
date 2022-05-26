class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const departName = new Department("Quality Engineer");
console.log(departName);
