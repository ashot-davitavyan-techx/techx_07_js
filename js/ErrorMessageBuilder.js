export class ErrorMessageBuilder {
    static buildMessage(errors) {
        let message = " ";
        let invalid_fields;
        let empty_fields;

        switch (errors[0].fieldName) {
            case "email":
                return " Enter a valid Email";
                break;
            case "phone-number":
                return " Enter a valid phone number";
            default:
                return " This field is required";
        }
    }
}
