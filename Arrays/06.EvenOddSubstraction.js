function EvenOdd(arr) {
    let even = 0;
    let odd = 0;
    for (let index = 0; index < arr.length; index++) {
        let num = Number(arr[index])
        if (num % 2 == 0) {
            even += num;
        }else{
            odd += num
        }
        
    }
    console.log(even - odd);
}
EvenOdd([1,2,3,4,5,6])