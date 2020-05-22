function rounding(num1, num2) {
    if (num2 > 15) {
        num2 = 15;
    }
    num1 = parseFloat(num1.toFixed(num2));
    console.log(num1)
    
}
rounding(3.14000000, 4)