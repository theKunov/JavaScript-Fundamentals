function processOddNums(array) {
    newArr = [];
    for (const key in array) {
        if (key % 2 !== 0) {
            newArr.push(array[key] * 2);
        }
        
    }
    console.log(newArr.reverse().join(' '));
    
}
processOddNums([3, 0, 10, 4, 7, 3])