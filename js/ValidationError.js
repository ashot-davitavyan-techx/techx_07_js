export class ValidationError extends Error {
    constructor(type, message, fieldName, fieldGroupName){
        super(message);
        this.name = "ValidationError";
        this.type = type;
        this.fieldName = fieldName;
        this.fieldGroupName = fieldGroupName;
    }

    toString(){
        return `${this.type} error of ${this.fieldName} field of ${this.fieldGroupName} group`;
    }
}