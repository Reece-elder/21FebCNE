' use strict';

// * DOM Manioulation
// DOM represents the Document as Nodes and Objects, which can be constructed to create a visual page

// Move stuff, Formatting Attributes img src, Provisioning of Elements, CSS, extra functionality

// * Document Selector Methods

// * QuerySelector() - Returns the FIRST matching element

// Assigning Header Variable to first h1 (using CSS Selector rules in DOM)
let header = document.querySelector('h2');

// Console logging out header 
console.log(header);

// header element is data type of object
console.log(typeof header);

// element.textContent outputs the inner text of an HTML element
console.log(header.textContent);

// Modifies an HTML elements style
header.style.color = 'red';

// selected the first element with class .className
let headerClass = document.querySelector('.classHeader');

// Selected the first element with id idHeader
let idHeader = document.querySelector('#idHeader');

// Console logged out the content of headerClass
console.log(headerClass.textContent);

//Function to change colour of element
let headerColourChange = (element, colour) => element.style.color = colour;

// Function to addBorder of width and colour
let addBorder = (element, width ,colour) => element.style.border = `solid ${width}px ${colour}`;

// Invoked and passed in element and colour
headerColourChange(headerClass, "green");
headerColourChange(idHeader, "crimson");

// * QuerySelectorAll() - Returns all matching elements

// Grabs all occurences of element 'p'
let paraList = document.querySelectorAll('p');
console.log(paraList);

console.log(typeof paraList); // Type of Object

// simplifed for loop using 'of' 
for(let paragraph of paraList){
    console.log(paragraph.textContent);
    addBorder(paragraph,4,"teal");
}

// Use QuerySelector to pick out an element, a class and an ID
// Change the text content to a new String
// Add Borders of varying width and colour
// Add Margin and Padding 

// User Query Selector All to create a list of elements (your choice)
// Modify the CSS of every other element 1,3,5,7
// Modify the text content of every other element 2,4,6,8

// stretch goals - Use prompt() to change the text content of an element

// * Event Listener
// Event Listeners listen for an event.. They invoke a function when the declared event is triggered
// WebEvents - Clicking a Button, submitting a form, moving your mouse, filling in some data

// Function that is invoked through HTML
let htmlButton = () => console.log("HTML Button Clicked");

// Function to record when JS Button clicked
let jsButtonClicked = () => console.log("Js Button clicked");

// Grabbed JS Button
let jsButton = document.querySelector('.jsButton');
let jsButton2 = document.querySelector('.jsButton2');

// add event listener takes 
jsButton.addEventListener('click', function(){
    console.log("Button clicked from JS");
});

jsButton2.addEventListener('click', jsButtonClicked);

// * Create Element + Append Child

let createElement = () => {
    let newParagraph = document.document.createElement('p');
}

let appendChild = () => {
    
}
// * Remove Child

// * Replace Child

// * Set Attribute

// * Get Attribute

// * Remove Attribute








