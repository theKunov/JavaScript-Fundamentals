function searchForNums(arrayOne, arrayTwo) {
    let modifiedArr = [];
    
    let elementsToTake = arrayTwo[0];
    let elementsToDelete = arrayTwo[1];
    let elementsToSearch = arrayTwo[2];
    
    for (let index = 0; index < elementsToTake; index++) {
        let number = arrayOne.shift();
        modifiedArr.push(number);    
    }
    for (let j = 0; j < elementsToDelete; j++) {
        modifiedArr.shift();
    }
    let counter = 0;
    for (const iterator of modifiedArr) {
        if (iterator === elementsToSearch) {
            counter++;
        }
    }
    console.log(`Number ${elementsToSearch} occurs ${counter} times.`);
    
}
searchForNums([5, 2, 3, 4, 1, 6],
    [5, 2, 3])