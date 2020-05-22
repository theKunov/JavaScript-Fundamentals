function smallestTwoNums(array) {
    sortedArray = [];
  
    let smallNum = Number.MAX_SAFE_INTEGER;
    let secondSmallest = Number.MAX_SAFE_INTEGER;

    for (let index = 0; index < array.length; index++) {
        let numOne = array[index];
        if (numOne <= smallNum) {
            smallNum = numOne;
            sortedArray.unshift(smallNum);
        }else if(numOne > smallNum && numOne < secondSmallest){
            secondSmallest = numOne;
            sortedArray.splice(1, 0 , secondSmallest);
        }else{
            sortedArray.push(numOne);
        }
    }
    console.log(sortedArray.slice(0, 2).join(' '));
    
}
smallestTwoNums([3, 0, 10, 4, 7, 3])