import { ErrorHandler } from "./ErrorHandler.js";
import { ReferencedPerson } from "./ReferencedPerson.js";
import { Validator } from "./Validator.js";

function logFormData(formData){
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
}

function storeReferencedPeople(formData){
    let referencedPeople = []
    let referencedPerson = new ReferencedPerson(
        formData.get('reference-name-1'),
        formData.get('reference-address-1'),
        formData.get('reference-number-1')
    );
    referencedPeople.push(referencedPerson);
    referencedPerson = new ReferencedPerson(
        formData.get('reference-name-2'),
        formData.get('reference-address-2'),
        formData.get('reference-number-2')
    );
    referencedPeople.push(referencedPerson);
    for (const refperson of referencedPeople){
        console.log(refperson.toString());
    }
}

function clearErrors(){
    const errorMessageBoxes = document.querySelectorAll(".error-message-box");
    errorMessageBoxes.forEach(msg => msg.style.display = "none");
    const errorFields = document.querySelectorAll(".is-invalid-field");
    errorFields.forEach(field => field.classList.remove("is-invalid-field"));
    const errorFieldGroups = document.querySelectorAll(".is-invalid-group");
    errorFieldGroups.forEach(field => field.classList.remove("is-invalid-group"));
}

const form = document.getElementById("form");
const sourceSelect = document.getElementById("source");
const otherOption = document.getElementById("other-source");
const buttonClose = document.getElementById("button-close");
const successMessage = document.getElementById("success-message");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();

    debugger;
    
    const formData = new FormData(form);
    const validator = new Validator();
    const errorList = validator.validate(formData);
    
    debugger;

    ErrorHandler.handleErrors(errorList);
    if (errorList.length == 0){
        logFormData(formData);
        successMessage.style.display = "flex";
        form.reset();
    }
    const referencedPeople = storeReferencedPeople(formData);
});

sourceSelect.addEventListener("change", function() {
    if (this.value == "other") {
        otherOption.style.display = "flex";
    } else {
        otherOption.style.display = "none";
    }
});

buttonClose.addEventListener("click", function(){
    successMessage.style.display = "none";
});
