//Conditional statements

//if 
let number = 25;

if(number > 23){
    console.log("You are greater than 23");
}

// if/else if/else
if(number > 25){
    console.log("You are greater than 25");
}
else if(number < 25){
    console.log("You are less than 25");
}
else{
    console.log("You're equal to 25");
}

//switch
let day = "Wednesday";
switch(day){
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Friday":
        console.log("It's the start of the week");
        break;
    default:
        console.log("It's a regular day");
}

//Loops - repeatable code (until specific condition is met)
// console.log(1);

//For loop
for(let i = 0; i <= 5; i++){
    console.log("For loop count: ", i);
}

//While loop
let count = 1; 

while(count <= 5){
    console.log("While loop: ", count);
    count++;
}

//Do-while loop
let j = 8;

do{
    console.log("Do-while count: ", j);
    j++;
}while(j <= 5)