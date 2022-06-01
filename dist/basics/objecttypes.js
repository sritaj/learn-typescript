"use strict";
const productOne = {
    name: "iPhone11ProMax",
    category: "smartphone",
    price: 1199,
};
console.log(productOne.name);
console.log(productOne.category);
console.log(productOne.price);
const productTwo = {
    name: "iPad",
    category: "tablet",
    price: 799,
};
const productThree = {
    name: "MacbookPro",
    category: "laptop",
    price: 1499,
};
console.log(productThree.name);
console.log(productThree.category);
console.log(productThree.price);
const productOneDetails = {
    name: "iPhone11ProMax",
    category: "smartphone",
    price: 1199,
    hardware_specs: {
        ram: "8gb",
        storage: "128gb",
        os: "iOS 14",
        touchID: false,
        faceID: true,
        serialNo: 874944,
    },
};
console.log(productOneDetails.hardware_specs.serialNo);
const productTwoDetails = {
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
