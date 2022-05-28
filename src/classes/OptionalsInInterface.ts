/**
 * Interface showing demonstration on having optional properties and methods
 */
interface OptionalsInInterface {
  name?: string;
  age: number;

  myName?(): string;
  myAge(): number;
}
/**
 * Class implementing the interface
 */
class checkingOptional implements OptionalsInInterface {
  age: number;
  constructor(age: number) {
    this.age = age;
  }

  myAge(): number {
    return 32;
  }
}
