function solve(array) {
    let targets = array.shift().split(' ').map(Number);

    array.forEach((word, key) => {
        let [command, index, value] = word.split(' ');
        index = Number(index);
        value = Number(value)
       
        if (command == 'End') {
            if (targets.length > 0 ) {
                console.log(targets.join('|'));
            }
            
          return;   
        }

        switch (command) {
            case 'Shoot':

                if (index >= 0 && index <= targets.length - 1) {
                    targets[index] -= value;

                    if (targets[index] <= 0) {
                        let gone = targets.splice(index, 1);

                    }
                }
                break;
            case 'Add':

                if (index >= 0 && index <= targets.length - 1) {
                    targets.splice(index, 0, value);
                }else{
                    console.log('Invalid placement!');
                    
                }
                break;
            case 'Strike':

                if (index - value >= 0 && index + value <= targets.length -1) {
                   let strikedBefore =  targets.splice(index - value, value + value +1);
                   

                }else{
                    console.log('Strike missed!');
                    
                }
                break;


        }
    });

}

solve(['47 55 85 78 99 20',
       'Shoot 1 55',
       'Shoot 8 15',
       'Strike 2 3',
       'Add 0 22',
       'Add 2 40',
       'Add 2 50',
       'End'])