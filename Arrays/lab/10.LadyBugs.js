function ladyBugs(array) {
    let arr = [];
    let arrayBugs = array[1].split(" ")
    for (let n = 0; n < array[0]; n++) {
        arr[n] = 0;

    }
    for (let index = 0; index < arrayBugs.length; index++) {
        let ladyBugIndex = Number(arrayBugs[index]);
        arr[arrayBugs[index]] = 1;

    }
   
    arr.length = array[0];
    
    for (let index = 2; index < array.length; index++) {

        let commandIndex = array[index].split(" ")
        let num1 = Number(commandIndex[0]);
        let text = commandIndex[1];
        let num2 = Number(commandIndex[2]);
        if (num2 < 0) {
            num2 = Math.abs(num2);
            if (text === 'right') {
                text = 'left';
            } else if (text === 'left') {
                text = 'right';
            }
        }
        if (text === 'right') {
            if (num1 >= 0 && num1 <= arr[0]) {
                for (let y = 1; y <= arr.length; y++) {

                    if (arr[num1] === 1) {
                        if (arr[num1 + num2] != 1) {

                            arr[num1 + num2] = 1;
                            arr[num1] = 0;
                            arr.length = array[0];
                            break;
                        } else if (arr[num1 + num2 + y] != 1) {

                            arr[num1 + num2 + y] = 1;
                            arr[num1] = 0;
                            arr.length = array[0];
                            break;
                        }
                    }
                }
            }

        } else if (text === 'left') {
            if (num1 >= 0 && num1 <= arr[0]) {
                for (let y = 1; y <= arr.length; y++) {
                    if (arr[num1] === 1) {
                        if (arr[num1 - num2] != 1) {
                            if (num1 - num2 < 0) {

                                arr[num1] = 0;
                                break;
                            }

                            arr[num1 - num2] = 1;
                            arr[num1] = 0;
                            break;
                        } else if (arr[num1 - num2 - y] != 1) {
                            if (num1 - num2 - y < 0) {
                                arr[num1] = 0;
                                break;
                            }
                            arr[num1 - num2 - y] = 1;
                            arr[num1] = 0;
                            break;
                        }
                    }
                }
            }
        }
    }

    arr.length = array[0];
    console.log(arr.join(' '));

}
ladyBugs([ 5, '3',
'3 left 2',
'1 left -2'])