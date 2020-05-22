function rotate(array) {

    let number = Number(array[array.length - 1]);
    array.length -= 1;
    for (let index = 0; index < number; index++) {

        let one = array.pop()
        array.unshift(one);

    }
    return array.join(' ')

}
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15'])