function matrice(array) {
    counter = 0;
    let sumHorizontal = 0;
    let sumVertical = 0;

    let sumCheck = '';

    for (const iterator of array) {   // check horizontally
        for (const number of iterator) {
            if (counter < 1) {
                sumHorizontal += number;
            } else {
                sumCheck += Number(number);
            }
        }
        counter++;
        if (sumCheck !== sumHorizontal && sumCheck !== '') {
            return 'false'
        }
        sumCheck = 0;
    }
   
    counter = 0;
    sumCheck = ''
    for (const key in array) {       // check vertically
        for (const index in array) {
            if (counter < 1) {
                sumVertical += array[index][key];
            }else {
                sumCheck += Number(array[index][key]);
            }
           
        }
        counter++;
        if (sumCheck !== sumVertical && sumCheck !== '') {
            return 'false'
        }
        sumCheck = 0;
    }

    return 'true'
}
console.log(matrice([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]))