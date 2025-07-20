import { ValidationError } from "./ValidationError.js";

export class Validator {
    static ErrorTypes = Object.freeze({
        INVALID_FIELD: 'invalid_field',
        EMPTY_FIELD: 'empty_field',
    })

    errorList = [];

    validateNameField(field, value, fieldGroupName) {
        const nameRegx = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]+$/;

        if (value.trim().length < 3) {
            throw new ValidationError(Validator.ErrorTypes.EMPTY_FIELD, "Empty Field", field, fieldGroupName);
        } else if (!nameRegx.test(value)) {
            throw new ValidationError(Validator.ErrorTypes.INVALID_FIELD, "Invalid Field", field, fieldGroupName);
        }
    }

    validate(formData) {
        for (const [key, value] of formData.entries()) {
            try {
                switch (key) {
                    case "first_name":
                    case "last_name":
                        this.validateNameField(key, value, "name-group");
                        break;

                }
            } catch (error) {
                this.errorList.push(error);
            }
        }
        return this.errorList;
    }
}
