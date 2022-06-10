/**
 * Example of Generic Class type
 */
class StorageClass<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorgae = new StorageClass<string>();
textStorgae.addItem("Max");
textStorgae.addItem("May");

const numberStorage = new StorageClass<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);

const objStorage = new StorageClass<object>();
const ob1 = { hello: "Max" };
const ob2 = { hello: "May" };
objStorage.addItem(ob1);
objStorage.addItem(ob2);

objStorage.removeItem(ob1);

console.log(objStorage);
