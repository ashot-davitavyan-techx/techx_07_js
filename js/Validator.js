import { ValidationError } from "./ValidationError.js";

export class Validator {
    static ErrorTypes = Object.freeze({
        INVALID_FIELD: 'invalid_field',
        EMPTY_FIELD: 'empty_field',
    })

    errorList = [];

    validateField(field, value, fieldGroupName) {
        if (field != "email" && value.trim().length < 3) {
            throw new ValidationError(Validator.ErrorTypes.EMPTY_FIELD, "Empty Field", field, fieldGroupName);
        }
        switch (field) {
            case "email":
                this.validateEmailField(field, value);
                break;
            case "phone-number":
                this.validatePhoneNumber(field, value);
                break;
            default:
                break;
        }
    }

    validateEmailField(field, value) {
        const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        
        if (!emailRegx.test(value) && value.length != 0) {
            throw new ValidationError(Validator.ErrorTypes.INVALID_FIELD, "Invalid Email", field, ".email-group");
        }
    }

    validatePhoneNumber(field, value) {
        const phoneNumberRegx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
        if (!phoneNumberRegx.test(value))
            throw new ValidationError(Validator.ErrorTypes.INVALID_FIELD, "Invalid Phone Number", field, ".phone-number-group")
        return;
    }

    validateSource(source, other){
        if (source == ""){
            throw new ValidationError(Validator.ErrorTypes.EMPTY_FIELD, "Empty Field", ".source", ".source-group");
        } else if (source == "other" && other.trim().length < 1){
            throw new ValidationError(Validator.ErrorTypes.EMPTY_FIELD, "Empty Field", ".other-source", ".other-group");
        }
    }

    validate(formData) {
        let source;

        for (const [key, value] of formData.entries()) {
            try {
                switch (key) {
                    case "first_name":
                    case "last_name":
                        this.validateField(key, value, ".name-group");
                        break;
                    case "street_address":
                    case "city":
                    case "state_province":
                    case "postal_zip":
                        this.validateField(key, value, ".address-group");
                        break;
                    case "phone_number":
                        this.validateField(key, value, ".phone-number-group");
                        break;
                    case "email":
                        this.validateField(key, value, ".email-group");
                        break;
                    case "source":
                        source = value;
                        break;
                    case "other-source":
                        this.validateSource(source, value);
                        break;
                    default:
                        break;
                }
            } catch (error) {
                this.errorList.push(error);
            }
        }
        return this.errorList;
    }
}
