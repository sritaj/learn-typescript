/**
 * Array
 * @type {Array<string>}
 */
//type inference - typescript automatically infers the type of the array
let hobbies = ["sports", "movies"];

/**
 * Array
 * @type {Array<string>}
 */
//explicitly declaring type inference
let favHobbies: string[] = ["book reading", "travelling"];

for (let fav in favHobbies) {
  console.log(fav.toUpperCase);
}

/**
 * Array
 * @type {Array<any>}
 */
//explicitly declaring type inference
let random: any[] = ["book reading", true, 1.05, 49];
