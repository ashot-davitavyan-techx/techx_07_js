import { ErrorHandler } from "./ErrorHandler.js";
import { Validator } from "./Validator.js";

const form = document.getElementById("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const validator = new Validator();
    const errorList = validator.validate(formData);

    ErrorHandler.handleErrors(errorList);
});