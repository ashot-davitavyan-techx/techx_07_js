function ValidateNameField(firstName, lastName){
    const nameRegx = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]+$/;
    if (firstName.trim().length < 3 || lastName.trim().length < 3 || !nameRegex.test(firstName) || !nameRegex.test(lastName)){
        throw new ValidationError("Invalid first or last name");
    }
}

const form = document.getElementById("form");
form.addEventListener('submit', function (event){
    event.preventDefault();

    const firstName = document.querySelector('.first-name');
    
    try {
        validateNameField(formData.get("first_name"), formData.get("last_name"))
    } catch (ex) {
        
    }
    const formData = new FormData(form);
    const lastName = formData.get("last_name");
    const streetAddressLine1 = formData.get("street_address");
    const streetAddressLine2 = formData.get("street_address_2");
    const city = formData.get("city");
    const stateProvince = formData.get("state_province");
    const postalZip = formData.get("postal_zip");
    const phoneNumber = formData.get("phone_number");
    const email = formData.get("email");
    const source = formData.get("source");
    const sourceOther = formData.get("other");
    const feedback = formData.get("feedback");
    const suggestions = formData.get("suggestions");
    const recommendation = formData.getAll("recommendation");

    console.log(`firstName: ${firstName}`);
    console.log(`lastName: ${lastName}`);
    console.log(`streetAddress: ${streetAddressLine1}`);
    console.log(`streetAddress2: ${streetAddressLine2}`);
    console.log(`city: ${city}`);
    console.log(`stateProvince: ${stateProvince}`);
    console.log(`postalZip: ${postalZip}`);
    console.log(`phoneNumber: ${phoneNumber}`);
    console.log(`email: ${email}`);
    console.log(`source: ${source}`);
    console.log(`sourceOther: ${sourceOther}`);
    console.log(`feedback: ${feedback}`);
    console.log(`suggestions: ${suggestions}`);
    console.log(`recommendation: ${recommendation}`);
    
    // const peopleReference =  //table stuff
});