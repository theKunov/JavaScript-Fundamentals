function manipulator(arrayOne, arrayTwo) {
    for (let index = 0; index < arrayTwo.length; index++) {
        let toDo = arrayTwo[index].split(' ');
        let task = toDo.shift();
        switch (task) {
            case 'add':
                arrayOne.splice(toDo[0], 0, +toDo[1]);
                break;
            case 'addMany':
                let indexToUse = +toDo.shift();
                
                for (let index = 0; index < toDo.length; index++) {
                    arrayOne.splice(indexToUse + index, 0, +toDo[index])
                }
                break;
            case 'contains':
                let checker = false;
                arrayOne.forEach((element, index) => {
                    if (element == toDo[0]) {
                        console.log(index);
                        checker = true;
                    }
                    
                });
                if (!checker) {
                    console.log('-1');
                }
                break;
            case 'remove':
                arrayOne.splice(Number(toDo[0]), 1)
                break;
                case 'shift':
                for (let index = 0; index < Number(toDo[0]); index++) {
                    for (let j = 0; j <= arrayOne.length; j++) {
                       let shift = arrayOne.shift();
                       arrayOne.push(shift);
                    }
                }
                break;
            case 'sumPairs':
                for (let index = 0; index < arrayOne.length; index++) {
                    let numberOne = Number(arrayOne[index]);
                    let numberTwo = arrayOne[index+1];
                    if (numberTwo == undefined) {
                        numberTwo = 0;
                    }
                    let sumOfNums = numberOne + Number(numberTwo);
                    arrayOne.splice(index, 2 , sumOfNums)
                }
                break;
                case 'print':
                    console.log(`[ ${arrayOne.join(', ')} ]`);
                    return
                break;
        }
    }
}
manipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])