function calculator(numOne, numTwo, operator) {
    switch (operator) {
        case 'multiply':
            return numOne * numTwo
            break;
        case 'divide':
            return numOne / numTwo
            break;
        case 'add':
            return numOne + numTwo
            break;
        case 'subtract':
            return numOne - numTwo
            break;
    }
}
console.log(calculator(40,
    8,
    'divide'));
