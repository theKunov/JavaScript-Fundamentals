function perfectNumber(number) {
    let perfectNumber = 0;
    for (let index = number-1; index >= 1; index--) {
        let num = number / index;
        if (num % 2 === 0 || num % 2 === 1) {
            
           perfectNumber += index;
       }
        
    }
   if (perfectNumber === number) {
       return 'We have a perfect number!'
   }else{
       return "It's not so perfect."
   }
    
}
console.log(perfectNumber(1236498));
 