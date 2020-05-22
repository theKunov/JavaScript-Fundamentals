function solve(array) {
    let targets = array.shift().split(' ').map(Number);
    let shotCount = 0; 

    for (const word of array) {
        if (word == 'End') {
            console.log(`Shot targets: ${shotCount} -> ${targets.join(' ')}`);
            
            
            break;
        }
        let index = Number(word);
        if (index >= 0 && index <= targets.length -1) {
            let value = targets[index];
            
            targets[index] = -1;
            shotCount++;
            targets.forEach((target, key) => {
                if (target != -1) {
                    if (target > value) {
                        targets[key] -= value;
                    }else{
                        targets[key] += value;
                    }
                }
                
            });
        }
        
    }

}

solve(['30 30 12 60 54 66',
       '5',
       '2',
       '4',
       '0',
       'End'])