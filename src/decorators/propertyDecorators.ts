//Decorator example for Properties
function Log(target: any, propertyName: string) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

//Decorator example for Getter
function LogTwo(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator");
  console.log(target, name, descriptor);
}

//Decorator example for Methods
function LogThree(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target, name, descriptor);
}

//Decorator example for Parameter
function LogFour(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target, name, position);
}

class ProductExample {
  @Log
  title: string;
  private _price: number;

  @LogTwo
  setPrice(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @LogThree
  getPriceWithTax(@LogFour tax: number) {
    return this._price * (1 + tax);
  }
}
