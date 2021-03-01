'use strict';

// * Truthy and falsey
// ! within JS each value has an inherent boolean known as truthy or falsey / falsy
// ! All values are truthy UNLESS they are defines as falsey

// * Falsey Values
let falseyExample = 0;
let falsey2 = false;
let falsey3 = null;
let falsey4 = undefined;
let falsey5 = NaN;
let falsey6 = "";

// * Truthy Values 
let truthy1 = "0";
let truthy2 = "false";
let truthy3 = [];
let truthy4 = {};
let truthy5 = function(){};

console.log(typeof falsey5);
console.log(typeof falseyExample);

// * Conditionals 

let bool1 = true;
let bool2 = false;

// * checking for equality
// When using == We are only checking the value, we dont care about the type
// ? partial equality??

console.log(bool1 == bool2); // False
console.log(1 == 1); // True
console.log(1 == "1"); // false, value matches, type doesnt
console.log([1] == "1"); // true
console.log(bool1 == 1); // True
console.log(bool1 == "1"); // True

// Using === is strict equality, data type AND value must match

console.log(1 === 1); //true
console.log(1 === "1"); //false
console.log(bool1 === true); // true

// * Inequality
// When using ! we're saying IS NOT equal to this

console.log(1 != "1"); // false
console.log(1 == "1"); // true

console.log(1 !== "1"); // true


// * If statements

/*
if ([condition]){
do something
} else {
    do something
}
*/

let pizzaEaten = false;
//let pizzaEaten;

if (pizzaEaten === true){
    console.log(`Pizza has been eaten ${pizzaEaten}`);
} else if (pizzaEaten === false) {
    console.log(`Pizza not eaten`);
    //console.log(typeof pizzaEaten);
    //console.log(pizzaEaten);
}

// * Ternary if statement 
// ? Common if statement is with simple true or false condition with 2 outcomes
// ? Ternary allows you to convert to a one liner for simplicity

const myAge = 17;

if (myAge > 18) {
    console.log(`Sad times, you're ${myAge}, you have to adult now`);
} else {
    console.log(`Congrats, you're ${myAge}, you can just play video games`);
}

// ( [condition] ? value1 : value2 )

const adultString = `Sad times, you're ${myAge}, you have to adult now`;
const childString = `Congrats, you're ${myAge}, you can just play video games`;

let ageString = (myAge > 18 ? adultString : childString);
console.log(ageString);