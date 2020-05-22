function print(num1 , num2) {
    let num = 0;
    let allNums = "";
    for(let i = num1 ; i <= num2 ; i++){
        allNums += i + " "
        num += i;
        
    }
    console.log(`${allNums}\nSum: ${num}`);
    
}
print(0, 26)