'use Strict';

// POST - Create
// GET - Read
// PUT - Update
// DELETE - Delete

// * Fetch
// Fetch allows us to send and recieve requests utilising promises

let targetDiv = document.querySelector('div');

// * Basic Use case for a get request

/*
fetch(`https://jsonplaceholder.typicode.com/comments`) // fetch plug in the target URL
.then((response) => { // .then follows fetch and takes in response
    if (response.status !== 200) { // If statement to check if response IS NOT 200
        console.log(`status: ${response.status}`);
        return;
    }
    response.json()// Taking response and converting to json using .json()
    .then( (data) => { // .then() if succesful uses arrow function
        console.log(data); // console.log out data
    }).catch((error) => { //.catch() if unsuccesful save error
        console.log(`${error}`); // console.log out error
    })
});
*/

fetch(`https://jsonplaceholder.typicode.com/posts`) // fetch plug in the target URL
.then((response) => { // .then follows fetch and takes in response
    if (response.status !== 200) { // If statement to check if response IS NOT 200
        console.log(`status: ${response.status}`);
        return;
    }
    response.json()
    .then((data) => {
        for (let i of data){
            postData(i);
        }
    } )
    .catch((error) => console.log(`${error}`))
});

// * Fetch get by ID

let id = 2; // ID of item I want to retrieve
console.log(`The id of the item I want is ${id}`);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then((response) => {
    if (response.status !== 200) {
        console.log(`Status ${response.status}`);
        return;
    }
    response.json()
    .then((data) => {
        console.log(data);
        postData(data);
    }) 
    .catch((error) => console.log(`Error ${error}`));
})

// * Fetch Post

// Object being passed to the backend 
const myObject = {
    "userId": 100,
    "title": "this is a test",
    "body": "This is the test body"
};

//fetch POST method
fetch(`http://jsonplaceholder.typicode.com/posts`,{
    method: `POST`, // Declaring the method
    headers: { 
        "Content-type":"application/json" // Header
    },
    body: JSON.stringify(myObject) // What data to post
})
.then( (response) => {
    if (response.status !== 201) { // Status code of 201
        console.log(`Status ${response.status}`);
        return;
    } else {
        console.log(`All good! ${response.status}`);
    }
    response.json()
.then( (data) => console.log(`Request succesful with JSON response ${data}`))
.catch( (error) => console.log(error))
});

// * Fetch Delete 
// Deleting a specific item  

console.log(`Post to be deleted ${id}`);

fetch(`http://jsonplaceholder.typicode.com/posts/${id}`,{
    method:`DELETE`
})
.then((data) => console.log(`Request all food with JSON response ${data}`))
.catch((error) => console.log(error));


// * PostData Function 

let postData = (data) => {
    let newTitle = document.createElement('h3');
    let newBody = document.createElement('p');
    let bodyData = data.body; 
    let titleData = data.title;
    newTitle.innerHTML = titleData;
    newBody.innerHTML = bodyData;
    //newData.innerHTML = `Title: ${titleData} Body: ${bodyData}`;
    targetDiv.appendChild(newTitle);
    targetDiv.appendChild(newBody);
}