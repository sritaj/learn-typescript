//explicitly declaring type inference for the tuple below to have exactly array length of 2 with number and string placeholders
let jobTitle: [number, string] = [1, "Senior Principal Development Specialist"];

//push is allowed in Tuple so this operation cannot be stopped unless some logic is written
jobTitle.push("SK");

//the below code will throw compile time error since the index 1 of specified tuple is of type string
//jobTitle[1] = 34;

//the below code will throw error since tuple length is fixed to 2 and we are adding one more in it
//jobTitle = [10, "Junior Dev", 1223];
