function attack(array) {
    let matrix = array.map(
        row => row.split(' ').map(Number))
        
    let SumDiagonalOne = 0;
    let SumDiagonalTwo = 0;

    for (let index = 0; index < matrix.length; index++) {
        
        SumDiagonalOne += matrix[index][index];
       
    }
    let counter = 0;
    for (let index = matrix.length-1; index >=0 ; index--) {
    
        SumDiagonalTwo += matrix[counter][index];
        counter++;
    }
    let newArr = matrix;
    
    if (SumDiagonalOne !== SumDiagonalTwo) {
       for (let index = 0; index < array.length; index++) {
        let outPut = array[index].split(' ');
        console.log(outPut.join(' '));
       }
        
        
    }else{
        for (let j = 0; j < array.length; j++) {      // rotate through index on main Arr
            for (const key in newArr[j]) {
               let keyNum = Number(key);
                if (newArr[j][keyNum] != newArr[j][j] && newArr[j][keyNum] != newArr[j][newArr.length -1 -j] ) {
                    newArr[j][keyNum] = SumDiagonalOne;
                }
                
            }
            
        }
        for (let index = 0; index < newArr.length; index++) {
            let outPut = newArr[index];
            console.log(outPut.join(' '));
           }
    }
    
    

}
attack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])