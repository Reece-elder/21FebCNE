'use strict';

// * Fetch get by ID

let targetDiv = document.querySelector('.target');

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

// * PostData Function 

let postData = (data) => {
    let newCard = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h5');
    let cardBodyText = document.createElement('p');

    newCard.setAttribute('class','card');
    cardBody.setAttribute('class','card-body');

    let bodyData = data.body;
    let titleData = data.title;
    cardTitle.innerHTML = titleData;
    cardBodyText.innerHTML = bodyData;
    //newData.innerHTML = `Title: ${titleData} Body: ${bodyData}`;
    
    targetDiv.appendChild(newCard);
    newCard.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardBodyText);
}