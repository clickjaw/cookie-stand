"use strict";

let contactUsForm = document.getElementById('contact_form');

function submitForm(e){
    e.PreventDefault()
    let printHere = document.getElementById('footer');
    printHere.textContent = 
    `First Name : ${document.getElementById('firstName').value}
     Last Name: ${document.getElementById('lastName').value}
     Email: ${document.getElementById('email').value}`;

     contactUsForm.reset()
    
}

contactUsForm.addEventListener('submit', submitForm);
