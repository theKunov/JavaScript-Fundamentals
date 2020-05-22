function calculator(num, str, num2) {
    switch (str) {
        case "+":
            console.log((num + num2).toFixed(2));

            break;
        case "-":
            console.log((num - num2).toFixed(2));

            break;
        case "*":
            console.log((num * num2).toFixed(2));

            break;
        case "/":
            console.log((num / num2).toFixed(2));

            break;
    }

}
calculator(10,
    '-',
    5)