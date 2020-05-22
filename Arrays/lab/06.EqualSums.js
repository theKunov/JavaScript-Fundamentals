function equal(arr) {
    let notEqual = true;
    for (let index = 0; index < arr.length; index++) {
        
        let firstArrAll = 0;
        let secondArrAll = 0;
        for (let l = index - 1; l >= 0; l--) {
            firstArrAll += Number(arr[l]);
            
        }
        for (let n = index +1; n < arr.length; n++) {
            secondArrAll += Number(arr[n]);
            
        }
        
        
        if (firstArrAll == secondArrAll) {
            console.log(index);
            notEqual = false;
            break;
        }
        
        
    }
    if (notEqual) {
        console.log('no');
        
    }
}
equal([10, 5, 5, 99, 3, 4, 2, 5, 1, 2, 4])