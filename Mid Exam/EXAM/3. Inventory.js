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
        }else if (command == 'Collect') {
            let checker = false;
            for (const iterator of inventory) {
                if (item == iterator) {
                    checker = true;
                }
            }
            if (!checker) {
                inventory.push(item)
            }
        }else if (command == 'Drop') {

            inventory.forEach((element, key) => {
                if (element == item) {
                    inventory.splice(key, 1)
                }
            });

        }else if (command == 'Combine Items') {
            let aha = item.split(':');
            let itemOne = aha[0];
            let itemTwo = aha[1];
            let checkerOne = false;
            let checkerTwo = false;
            inventory.forEach((element, key) => {
                if (element == itemOne) {
                    checkerOne = true;
                }
                if (element == itemTwo) {
                    checkerTwo = true;
                }
            });
            let toMove = '',

            // if (checkerOne == true && checkerTwo == true) {
                
            //     inventory.forEach((element, key) => {
            //         if (element == itemTwo) {
            //             toMove = inventory.splice(key, 1)
            //         }
            //     });
            //     inventory.forEach((element, key) => {
            //         if (element == itemOne) {
            //             element = `${element}:${toMove} `;
            //         }
            //     });

    

         
            
        }else if (command == 'Renew') {
            console.log(`blabla`);


    }
    console.log(inventory.join(', '));

}
solve('Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Iron', 'Renew - Iron', 'Craft!')