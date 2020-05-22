function sorting(array) {
    let sortedArr = [];
    let maxNum = Number.MIN_SAFE_INTEGER;
    let minNum = Number.MAX_SAFE_INTEGER;
    for (let index = 0; index < array.length; index++) {

        //Looking for the biggest number
        array.forEach(element => {
            if (element > maxNum) {
                maxNum = element;
            }
        });
        array.forEach((element, index) => {
            if (element == maxNum) {
                let numberMax = +array.splice(index, 1);
                sortedArr.push(numberMax);
                maxNum = Number.MIN_SAFE_INTEGER;
            }
        });

        //Looking for the smallest number
        array.forEach(element => {
            if (element < minNum) {
                minNum = element;
            }
        });
        array.forEach((element, index) => {
            if (element == minNum) {
                let numberMin = +array.splice(index, 1);
                sortedArr.push(numberMin);
                minNum = Number.MAX_SAFE_INTEGER;
            }
        });
        index--;
    }
    console.log(sortedArr.join(' '));
    
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])