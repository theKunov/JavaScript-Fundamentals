function passwordValidator(pass) {
    let passArray = pass.split('');
    let checker = true;

    if (passArray.length < 6 || passArray.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        checker = false;
    }

    let counter = 0;
    let checkerForSymbols = false;
    passArray.forEach(element => {

        let symbol = element.charCodeAt();

        if (symbol >= 48 && symbol <= 57 || symbol >= 65 && symbol <= 90 || symbol >= 97 && symbol <= 122) {

        }else {
            checkerForSymbols = true;
            checker = false;
        }

        if (symbol >= 48 && symbol <= 57) {
            counter++;
        }
    });

    if (checkerForSymbols) {
        console.log("Password must consist only of letters and digits");
    }

    if (counter < 2) {
        console.log("Password must have at least 2 digits");
        checker = false;
    }
    if (checker) {
        console.log("Password is valid");

    }


}
passwordValidator('MyPass123')