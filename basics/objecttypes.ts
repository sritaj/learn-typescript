/**
 * Object declaring product
 * Object
 * @type {{name: string, category: string, price: number}}
 */
const productOne = {
  //type inference - typescript automatically infers the type of the key
  name: "iPhone11ProMax",
  category: "smartphone",
  price: 1199,
};

console.log(productOne.name);
console.log(productOne.category);
console.log(productOne.price);
//for below line typescript infers automatically that no property like screen exists for the productOne
//console.log(productOne.screen);

/**
 * Object declaring product
 * Object
 * @type {{name: string, category: string, price: number}}
 */
//explicitly declaring type inference but keeping it blank
const productTwo: {} = {
  name: "iPad",
  category: "tablet",
  price: 799,
};

//for below line, since the type inference is blank for the object, the key-value pairs declared will be considered not existing
//console.log(productTwo.category);

/**
 * Object declaring product
 * Object
 * @type {{name: string, category: string, price: number}}
 */
//explicitly declaring type inference
const productThree: { name: string; category: string; price: number } = {
  name: "MacbookPro",
  category: "laptop",
  price: 1499,
};

console.log(productThree.name);
console.log(productThree.category);
console.log(productThree.price);

/**
 * Object declaring product with details
 * Object
 * @type {{name: string, category: string, price: number, ram: string, storage: string, os: string, touchID: boolean, faceID: boolean, serialNo: number}}
 */
const productOneDetails = {
  //type inference - typescript automatically infers the type of the key
  name: "iPhone11ProMax",
  category: "smartphone",
  price: 1199,
  hardware_specs: {
    //type inference - typescript automatically infers the type of the key
    ram: "8gb",
    storage: "128gb",
    os: "iOS 14",
    touchID: false,
    faceID: true,
    serialNo: 874944,
  },
};

console.log(productOneDetails.hardware_specs.serialNo);

/**
 * Object declaring product with details
 * Object
 * @type {{name: string, category: string, price: number, ram: string, storage: string, os: string, touchID: boolean, faceID: boolean, serialNo: number}}
 */
//explicitly declaring type inference for nested objects
const productTwoDetails: {
  name: string;
  category: string;
  price: number;
  hardware_specs: {
    ram: string;
    storage: string;
    os: string;
    touchID: boolean;
    faceID: boolean;
    serialNo: number;
  };
} = {
  name: "iPhone13ProMax",
  category: "smartphone",
  price: 1299,
  hardware_specs: {
    ram: "16gb",
    storage: "256gb",
    os: "iOS 14.5",
    touchID: false,
    faceID: true,
    serialNo: 879944,
  },
};

console.log(productTwoDetails.hardware_specs.serialNo);
