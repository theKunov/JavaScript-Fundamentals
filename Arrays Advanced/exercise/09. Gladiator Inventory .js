function gladiator(array) {
    let invertory = array.shift().split(' ');
    for (let index = 0; index < array.length; index++) {
        let toDo = array[index].split(' ');
        let command = toDo[0];
        let item = toDo[1];
        switch (command) {
            case 'Buy':
                if (!invertory.includes(item)) {
                    invertory.push(item)
                }
                break;
            case 'Trash':
                invertory.forEach((element, index) => {
                    if (element === item) {
                        invertory.splice(index, 1);
                    }
                });
                break;
            case 'Repair':
                invertory.forEach((element, index) => {
                    if (element === item) {
                        let itemToMove = invertory.splice(index, 1);
                        invertory.push(String(itemToMove));
                    }
                });
                break;
            case 'Upgrade':
                let itemToUpgrde = item.split('-')
                let upgrade = itemToUpgrde[1];
                
                invertory.forEach((element, index) => {
                    if (element === itemToUpgrde[0]) {
                      let upgradeToAdd = `${invertory[index]}:${upgrade}`;
                      invertory.splice(index+1, 0, upgradeToAdd)
                    }
                });
                break;
        }


    }
    console.log(invertory.join(' '));
    
}
gladiator(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])