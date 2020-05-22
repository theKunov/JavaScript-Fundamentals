function lastKNumbers(n , k) {
    let array= [1];
    for (let index = 0; index < n-1; index++) {
        let number = 0;
        for (let j = 0; j < k; j++) {
            let numberToSum = array[index - j];
            if (numberToSum == undefined) {
                numberToSum = 0;
            }
            number += numberToSum;
            
        }
        
        array.push(number);
    }
    console.log(array.join(' '));
}
lastKNumbers(8, 2)