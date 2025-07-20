import { ErrorMessageBuilder } from "./ErrorMessageBuilder.js";

export class UIErrorPresenter {
    static getRootColor(color){
        const root = document.querySelector(':root');
        const style = getComputedStyle(root);
        return (style.getPropertyValue(color));
    }

    static showValidationError(error, fieldGroup){
        const inputField = fieldGroup.querySelector(`[name="${error.fieldName}"]`);
        inputField.style.borderColor = this.getRootColor('--dark-red');
    }
    
    static showValidationErrors(errors, toScroll){
        // debugger;
        const fieldGroup = document.querySelector(errors[0].fieldGroupName);
        fieldGroup.style.backgroundColor = this.getRootColor('--light-red');
        const errorMessageBox = fieldGroup.querySelector(".error-message-box");
        const errorMessage = errorMessageBox.querySelector(".error-message");
        errorMessageBox.style.display = "block";
        errorMessage.textContent = ErrorMessageBuilder.buildMessage(errors);
        for (const error of errors){
            this.showValidationError(error, fieldGroup);
        }
        if (toScroll){
            fieldGroup.scrollIntoView();
        }
    }
}