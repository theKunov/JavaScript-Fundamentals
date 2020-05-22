function bar(number) {
    let numberToUse= number / 10;
    let arrayLoading = [];
    for (let index = 0; index < numberToUse; index++) {
        arrayLoading.push('%');
    }
  
    for (let index = 0; index < 10; index++) {
        arrayLoading.push('.')
        if (arrayLoading.length == 10) {
            break;
        }
    }
    if (number < 100) {
        console.log(`${number}% [${arrayLoading.join('')}] \nStill loading...`);
    
    }else{
        console.log(`100% Complete! \n[%%%%%%%%%%]`);
        
    }
    
}
bar(90)