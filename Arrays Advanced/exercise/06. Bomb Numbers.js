function bombNumbers(array, specialNum) {
    let bombNumber = specialNum[0];
    let powerOfBomb = specialNum[1];
    let checker = true;
    while (checker) {
        array.forEach((element, index) => {
            if (element == bombNumber) {
                array.splice(index + 1, powerOfBomb);


            }

        });
        array.reverse();
        array.forEach((element, index) => {
            if (element == bombNumber) {
                array.splice(index, powerOfBomb + 1);
               
            }
        });
        array.reverse();
        checker = array.includes(bombNumber);
        
    }
    let sum = 0;
    for (const iterator of array) {
        sum += Number(iterator);
    }
    console.log(sum);

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])