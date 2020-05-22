function solve(num) {
    let numberString = String(num).split('');
    let sumEven = 0;
    let sumOdd = 0;
    numberString.forEach(element => {
        let number = +element
        if (number % 2 == 0) {
            sumEven += number;
            
        }else{
            sumOdd += number;
        }
        
    });
    
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    
}
solve(3495892137259234)