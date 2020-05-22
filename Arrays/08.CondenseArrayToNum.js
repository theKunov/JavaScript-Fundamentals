function condense(array) {

    while (array.length > 1) {
        let newArray = Array(array.length - 1);
        for (let index = 0; index < array.length - 1; index++) {
            newArray[index] = Number(array[index]) + Number(array[index + 1]);

        }
        array = newArray;
    }
    console.log(array[0]);
}
condense([5, 0, 4, 1, 2])