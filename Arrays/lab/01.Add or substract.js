function add(array) {
    let oldSum = 0;
    let newSum = 0;
    for (let index = 0; index < array.length; index++) {
        oldSum += array[index];
        let num = array[index];
        if (num % 2 == 0) {
            array[index]= array[index] + index;
        }else {
            array[index]= array[index] - index;
        }
        newSum += array[index];
        
    }
    console.log(array);
    console.log(oldSum);
    console.log(newSum);
    
    
}
add([5, 15, 23, 56, 35])