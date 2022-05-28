/**
 * Example to showcase singletonclass with private static properties and static getInstance method
 */
class singletonClass {
  private static instance: singletonClass;

  private constructor(msg: string) {
    console.log(msg);
  }

  static getInstance() {
    if (singletonClass.instance) {
      return singletonClass.instance;
    }
    return new singletonClass("new instance of singleton class is created");
  }
}

const initSingletonClass = singletonClass.getInstance();

const initSingletonClass2ndTime = singletonClass.getInstance();
