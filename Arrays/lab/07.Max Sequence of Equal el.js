function maxSequence(array) {
    let newArr = [];
    let longestArr = [];
    for (let index = 0; index < array.length; index++) {
        newArr.push(array[index]);
       
        for (let j = index + 1; j < array.length; j++) {
            if (array[j] === array[index]) {
                newArr.push(array[j]);
            }else{
                break;
            }
        }
        if (newArr.length > longestArr.length) {
            longestArr = newArr;
            newArr = [];
        }else{
            newArr = [];
        }
        
    }
    console.log(longestArr.join(' '));
   
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])