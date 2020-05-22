function sum(num) {
    let numToString = num.toString();
    var newNumber = 0;
    for(let index = 0 ; index < numToString.length ; index++){
        newNumber += Number(numToString[index])
    }
     
    console.log(newNumber);
    
    
}
sum(245678)