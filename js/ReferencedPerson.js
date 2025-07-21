export class ReferencedPerson{
    constructor (fullName, address, contactNumber){
        this.fullName = fullName;
        this.address = address;
        this.contactNumber = contactNumber;
    }

    toString(){
        return (`reference person ${this.fullName}, at ${this.address}, ${this.contactNumber}`);
    }
}