/**
 * Example to showcase SingletonClass with private static properties and static getInstance method
 */
class SingletonClass {
  private static instance: SingletonClass;

  private constructor(msg: string) {
    console.log(msg);
  }

  static getInstance() {
    if (SingletonClass.instance) {
      return SingletonClass.instance;
    }
    return new SingletonClass("new instance of singleton class is created");
  }
}

const initSingletonClass = SingletonClass.getInstance();

const initSingletonClass2ndTime = SingletonClass.getInstance();
