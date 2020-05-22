function negativePositive(array) {
    let newArr = [];
  
    array.forEach(element => {
        let elToNum = +element;
        if (elToNum < 0) {
            newArr.unshift(elToNum);
        }else{
            newArr.push(elToNum);
        }
        
    });
    newArr.forEach(number => {
        console.log(number);
        
    });
    
}
negativePositive([3, -2, 0, -1])