function distinct(array) {
    for (let index = 0; index < array.length ; index++) {
        let numberToCheck = +array.splice(index, 1);
        array.forEach((element, j) => {
            if (element === numberToCheck) {
                array.splice(j, 1)
            }
        });
        array.splice(index, 0 , numberToCheck)
        
    }
    console.log(array.join(' '));
}
distinct([20, 8, 12, 13, 4, 4, 8, 5])