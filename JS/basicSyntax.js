//variables
//let - mutable (or changeable)
let myName = "John";
console.log(myName); //outputs to console

myName = "Jane";
console.log(myName); //outputs different value to console

//const - cannot change value (or unchangeable)
const year = 2000;
console.log(year);

/* Will throw an error! */
/*year = 2001;
console.log(year);*/

//var - changeable like let but older way of declaring
var myHobby = "sleeping";
console.log(myHobby);

var myHobby = "coding";
console.log(myHobby);

//Key points
//Comments - Ctrl + / <-- Single-line comments
/* Multi-line
comment - Shift + Ctrl + A */

//Case sensitivity
// camelCasingMethod - e.g., myHobby vs. MyHobby

//Data types - Primitive Types
//numbers
let number = 13;
number = 13.5;
number = -14;
console.log("Number: ", number);

//strings - textual data
let greeting = "Let's go!";
console.log("Greeting: ", greeting);

//Boolean - logical (true or false) values
let status = false;
console.log(status);

status = true;
console.log(status);

//undefined - uninitialized or missing value
let nothing;
console.log(nothing);

//null - intentional absence of an value
let nullVar = null;
console.log(nullVar);

//Reference types
//Object - key-value pairs enclosed in curly braces
let personObject = {
    age: 20,
    name: "Julia",
};

console.log("Object: ", personObject);
console.log("Value of name in object: ", personObject.name);

//array - ordered list of values enclosed in square brackets ([])
let fruits = ["apple", "banana", "watermelon", "grapes"];
console.log(fruits);

//index
console.log("First fruit: ", fruits[0]);
console.log("Third fruit: ", fruits[2]);

console.log("Last fruit: ", fruits[fruits.length - 1]);

//modifying array elements
fruits[0] = "strawberry";
console.log(fruits);

//.push - add an element at the end of array
fruits.push("Mango");
console.log(fruits);

//.pop - removes the last element in the array
fruits.pop();
console.log(fruits);

//Dynamic typing - do not have to declare data type of variable
let things = ["items", 25, true];
console.log(things);

//Function
function sayHello(name){
    console.log("Hello: ", name);
}

sayHello("Kim");
// function functionName(parameter) {
 // code here
// }
// functionName(argument)

//Date - represent a specific moment in time
let date = new Date("2022-4-23");
console.log(date);