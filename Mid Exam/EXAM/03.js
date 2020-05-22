function solve(array) {
    let inventory = [];
    let items = array.shift().split(', ')
    for (const iterator of items) {
        inventory.push(iterator);
    }
    for (let index = 0; index < array.length; index++) {
        let toDo = array[index].split(' - ');
        let command = toDo[0];
        let item = toDo[1];
        if (command == 'Craft!') {
            break;

        }else if(command == 'Collect'){
            let checker = false;
            for (const iterator of inventory) {
                if (item == iterator) {
                    checker = true;
                }
            }
            if (!checker) {
                inventory.push(item)
            }
        }else if(command == 'Drop'){
           
            inventory.forEach((element, key) => {
                if (element == item) {
                    inventory.splice(key, 1)
                }
            });

        }else if (command == 'Combine Items'){
            let aha = item.split(':');
            let itemOne = aha[0];
            let itemTwo = aha[1];
            let checkerTwo = false;
            
            // for (const value of inventory) {
            //     if (value == itemTwo) {
            //         checkerTwo = true;
            //     }
            // }
           // if (checkerTwo) {
                
                    inventory.forEach((element , key) => {
                        if (element == itemOne) {
                            inventory.splice(key+1, 0, itemTwo)
                        }
                    });
        
                
           // }
            
    
            
        }else if (command == 'Renew'){
            inventory.forEach((element, key) => {
                if (element == item) {
                   let word = inventory.splice(key, 1);
                   inventory.push(String(word))
                }
            });
            
        }
        
    }
    console.log(inventory.join(', '));
    
    
}
solve([
'Iron, Sword',
'Drop - Bronze',
'Combine Items - Sword:Bow',
'Renew - Iron',
'Craft!'
])
