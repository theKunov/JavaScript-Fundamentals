function specialNum(num) {
    let sum = 0;
    let result = "";
    for (let index = 1; index <= num; index++) {
        index = index.toString()
        for (let j = 0; j < index.length; j++) {
            sum += Number(index[j]);
        }
        result =
            sum == 5 || sum == 7 || sum == 11;
            console.log(result ? `${index} -> True` : `${index} -> False` );
            sum = 0;
            



    }
}
specialNum(15)