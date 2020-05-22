function decrease(array) {
    let outPut = [];
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (let index = 0; index < array.length; index++) {
        if (array[index] >= maxNum) {
            maxNum = array[index];
            outPut.push(maxNum);
        }
        
    }
    return outPut.join(' ')
    
    
}
decrease([ 1, 3, 8, 4, 10, 12, 3, 2, 24])