import '../css/style.css';
import {sum} from './sum.js';


const apiUrl = 'http://localhost:3000/contacts';
const firstNumber = 1;
const secondNumber = 2;

const newDiv = document.createElement('div');
newDiv.innerHTML = `The sum of the numbers: ${sum(firstNumber, secondNumber)}`;

const jsonServerResponseTitle = document.createElement('div')
jsonServerResponseTitle.innerHTML = 'Json Server Response:';

document.body.appendChild(newDiv);
document.body.appendChild(jsonServerResponseTitle);

fetch(apiUrl)
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    data.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.innerHTML = 
        `        
        <h3>Contact Info:</h3>
        <ul>
            <li>${contact.name}</li>
            <li>${contact.email}</li>
            <li>${contact.phoneNumber}</li>
        </ul>
        `
        
        document.body.appendChild(contactItem)
    })
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    const errorMessage = document.createElement('div');
    errorMessage.innerHTML = 'Error: Unable to fetch data from the server. Please try again later.';
    document.body.appendChild(errorMessage);
});  

