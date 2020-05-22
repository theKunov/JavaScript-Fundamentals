function train(array) {
    let wagons = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());
    for (let index = 0; index < array.length; index++) {
        let command = array[index].split(' ');
        let numberToAdd = 0;
       
        if (command.length == 2) {
            numberToAdd = Number(command[1]);
            wagons.push(numberToAdd);
        }else{
            numberToAdd = Number(command[0]);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + numberToAdd <= maxCapacity) {
                    wagons[j] += numberToAdd;
                    break;
                }
                
            }
        }
    }
    console.log(wagons.join(' '));
    
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])