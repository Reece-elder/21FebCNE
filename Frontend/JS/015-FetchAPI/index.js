'use Strict';

// POST - Create
// GET - Read
// PUT - Update
// DELETE - Delete

// * Fetch
// Fetch allows us to send and recieve requests utilising promises

// * Basic Use case for a get request

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

fetch(`https://jsonplaceholder.typicode.com/comments`) // fetch plug in the target URL
.then((response) => { // .then follows fetch and takes in response
    if (response.status !== 200) { // If statement to check if response IS NOT 200
        console.log(`status: ${response.status}`);
        return;
    }
    response.json()
    .then((data) => console.log(data) )
    .catch((error) => console.log(`${error}`))
});