function factorial(numOne, numTwo) {
    let resultOne = 1;
    let resultTwo = 1;

    for (let j = 1; j <= numOne; j++) {
        resultOne *= j;
    }

    for (let index = 1; index <= numTwo; index++) {
        resultTwo *= index;
    }
    let endResult = resultOne / resultTwo;
    console.log(endResult.toFixed(2));
    
}
factorial(6, 2)
