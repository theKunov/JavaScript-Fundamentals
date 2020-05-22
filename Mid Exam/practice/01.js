function solve(array) {
    let daysPirating = Number(array.shift());
    let plundrPerDay = Number(array.shift());
    let expectedPlunder = Number(array.shift());
    
    let plundered = 0;
    let counterThree = 0; 
    let counterFive = 0;
    for (let index = 0; index < daysPirating; index++) {
        
        plundered += plundrPerDay;

        counterThree++;
        counterFive++;
        if (counterThree === 3) {
            plundered += plundrPerDay / 2;
            counterThree = 0;
        }
        if (counterFive === 5) {
            plundered -= plundered * 0.30;
            counterFive = 0;
        }
    }
    if (plundered >= expectedPlunder) {
        console.log(`Ahoy! ${plundered.toFixed(2)} plunder gained.`);
        
    }else{
        console.log(`Collected only ${(plundered / expectedPlunder * 100).toFixed(2)}% of the plunder.`);
        
    }


}

solve(["5",
    "40",
    "100"])