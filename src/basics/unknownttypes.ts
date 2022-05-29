//explicitly declaring var type as unknown
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

//when a var is declared unknown it cannot be assigned to var even though the last assigned value of it as same with the variable type that it is being assigned to
//userName = userInput;

//to overcome that we need to do type check explicity
if (typeof userInput === "string") userName = userInput;
