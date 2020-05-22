function solve(array) {
    let outPut = [];
    
    for (let index = 0; index < array.length; index++) {
        let currNum = array[index]
        let newArray = array.slice(index + 1)
        let isBigger = true;
        for (let n = 0; n < newArray.length; n++) {
            if (currNum <= newArray[n]) {
                isBigger = false;
                break;
            }
        }
        
        if (isBigger) {
            outPut.push(currNum);
        }
    }
    console.log(outPut.join(' '));
}
    

solve([41, 41, 34, 20])