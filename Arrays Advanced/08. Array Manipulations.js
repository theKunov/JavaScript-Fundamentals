function manipulations(array) {
    let arrayToWork = array.shift().split(' ').map(Number);
    for (let index = 0; index < array.length; index++) {
        let arr = array[index].split(' ');
        let manipulation = arr[0];
        switch (manipulation) {
            case 'Add':
                arrayToWork.push(Number(arr[1]))
                break;
            case 'Remove':
                arrayToWork = arrayToWork.filter(element => element !== Number(arr[1]))
                break;
            case 'RemoveAt':
                arrayToWork.splice(Number(arr[1]), 1)
                break;
            case 'Insert':
                arrayToWork.splice(Number(arr[2]), 0 , Number(arr[1]))
                break;

        }


    }
    console.log(arrayToWork.join(' '));
    

}
manipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])