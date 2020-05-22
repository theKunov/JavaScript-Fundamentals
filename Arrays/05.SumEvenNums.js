function sum(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        let num = Number(arr[index])
        if (num % 2 == 0) {
            sum += num;
        }
        
    }
    console.log(sum);
    
}
sum(['1','2','3','4','5','6'])