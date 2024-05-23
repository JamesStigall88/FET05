//JS operators and expressions
//Arithmetic operators and expressions
let a = 10;
let b = 5; 

//addition
//a = a + b;
//console.log(a);

//compound assignment operator
a += b;
console.log(a);

//subtraction
a -= b;
console.log(a);

//multiplication
a *= b;
console.log(a);

//division
a /= b;
console.log(a);

//modulo (remainder)
a %= b;
console.log(a);

//concatenation
console.log("Hello " + a + " World");

//Comparison operators
let x = 10;
let y = 5;

console.log(x > y); //greater than
console.log(x < y); //less than
console.log(x >= y); //greater than or equal to
console.log(x <= y); //less than or equal to
console.log(x == y); //equal to
console.log(x != y); //not equal to

//type coercion -- automatically converting one value to have the same 
//                 data type has the other value
console.log(50 == "50"); //gives us true -- loose equality
console.log(50 === "50"); //gives us false -- strict equality

//Logical operators
let sunny = true;
let warm = false;

//AND -- &&
console.log("Sunny AND warm: ", sunny && warm);

//OR -- ||
console.log("Sunny OR warm: ", sunny || warm); 

//NOT -- !
console.log("Not sunny: ", !sunny);

//Unary operators (++, --)
let num = 1; 
num++; //increment (or plus 1)
console.log(num);

num--; //decrement (or minus 1)
console.log(num);

//Ternary operators - (condition ? expression1 : expression2)
let activeStatus = false;
let member = activeStatus ? "Registered" : "Not Registered";

console.log(member);

//typeof operator
console.log(typeof activeStatus);
console.log(typeof member);