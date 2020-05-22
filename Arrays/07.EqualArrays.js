function equal(arr1 , arr2) {
    let sum = 0;
    for (let index = 0; index < arr1.length; index++) {
        let array1 = arr1[index];
        let array2 = arr2[index];
        if (array1 === array2) {
            sum+= Number(array1);
        }else{
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
    
}
equal(['10','20','30'], ['10','20','30'])