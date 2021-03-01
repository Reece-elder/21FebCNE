'use strict';
// * Iteration

// For - Set how many times it'll iterate
// While - While something is true it'll iterate
// Do While - Will run once then will check if true and repeat

// Case Statements - Bunch of statements, switch/case replaces a bunch of nested/if else statements

// * Incrementation

const counterBAD = 1; 
let counter = 1;

console.log(`counter value is ${counter}`);
console.log(counter++);
console.log(++counter);
console.log(`counter value is ${counter}`);

// * value++ variable is read first then incremented
// * ++value variable is incremented then read

// ? For Loop

// * for ([initial Variable]; [condition]; [increment]){
  // *  what we want to do
// *} 

 for(let i = 0; i < 10; i++){
     process
 }

 console.log("=========================");

 for(let i = 0; i <= 10; ++i){
    console.log(i);
}

// i+=num adds or subtracts that increment
console.log("====================");
for (let i = 0; i <= 15; i+=3 ){
    console.log(`i is equal to ${i}`);
}

// * While Loops

//* while ([declared boolean == true]) {
// *   what we want it to do
//* }

let notEnoughPizza = true;
let pizzaSlices = 0;

console.log(typeof notEnoughPizza);

while(notEnoughPizza) {
    console.log(`There's only ${pizzaSlices} pizza slices :( `);
    pizzaSlices+=4;

    if (pizzaSlices >= 26) {
        notEnoughPizza = false;
        console.log(pizzaSlices);
    } 
}

// * Do While Loops
// Loop that runs once before checking the declared boolean = true, will always run once

let testBool = true;
let boolCounter = 0;

do {
    console.log(`The boolean is ${testBool}`);
    boolCounter++

    if (boolCounter > 6) {
        testBool = false;
    }

} while(testBool);

// * Switch Case
// Evaluates an expression matching a case label
// Lets you loop through a series of nested if/else statements

const dayNumber = 7; 
let day; 

switch(dayNumber){
    case 1: 
        day = "Monday";
        break;
    case 2: 
        day = "Tuesday";
        break;
    case 3: 
        day = "Wednesday";
        break;
    case 4: 
        day = "Thursday";
        break;
    case 5: 
        day = "Friday";
        break;

    default:
        day="some other day.. who knows..";
}

console.log(typeof day);

console.log(`The day of the week is ${day}`);

function addFunc(x,y){
    return x + y;
}

addFunc(4,7);

console.log(addFunc(7,9));




