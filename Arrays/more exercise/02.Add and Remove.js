function addRemove(array) {
    let newArr = [];
    let counter = 1;
    for (let index = 0; index < array.length; index++) {
        
        switch (array[index]) {
            
            case 'add':
                newArr.push(counter);
                counter++;
                break;
            case 'remove':
                newArr.pop();
                counter++;
                break;

        }

    }
    if (newArr.length > 0) {
        return newArr.join(' ')
    }else{
        return 'Empty'
    }
}
console.log(addRemove(['add','remove','remove']));
 