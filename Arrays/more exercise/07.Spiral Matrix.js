function matrix(num1, num2) {
    let result = new Array(num1).fill().map(() => new Array(num1).fill('')); 
    let counter = 1;
    let startCol = 0;
    let endCol = num1 - 1;
    let startRow = 0;
    let endRow = num2- 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;

    }

    for (let m = 0; m < result.length; m++) {
        console.log(result[m].join(' '));
        
        
    }

}
 matrix(5,5)