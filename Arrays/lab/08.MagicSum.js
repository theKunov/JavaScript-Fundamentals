function magic(arr, number) {
    for (let index = 0; index < arr.length; index++) {
        let num1 = Number(arr[index]);
        for (let j = index + 1; j < arr.length; j++) {
            let num2 = Number(arr[j]);
            if (num1 + num2 === number) {
                console.log(`${num1} ${num2}`);
                
            }
            
        }
        
    }
}
magic([14, 20, 60, 13, 7, 19, 8], 27)