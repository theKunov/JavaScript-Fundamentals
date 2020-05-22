function sumFirstLast(array) {
    let sum = 0;
    for (const iterator of array) {
        let number = Number(iterator)
        sum += number
        
    }
    return sum;
}
console.log(sumFirstLast(['20', '30', '40']));

