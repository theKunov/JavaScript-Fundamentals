function wizardPoker(array) {
    let inventory = [];
    let items = array.shift().split(', ')
    for (const iterator of items) {
        inventory.push(iterator);
    }
    for (let index = 0; index < array.length; index++) {
        let checker = array[index];
        let task = array[index].split(' ')
        if (checker == 'Ready') {
            break;
        }
        let toDo = task.shift();

        if (toDo == 'Add') {
            let check = false;
            for (const iterator of cards) {
                if (iterator == task) {
                    check = true;
                }
            }
            if (check) {
                deck.push(String(task));
            }
            if(!check){
                console.log("Card not found.");  
            }
            
        } else if (toDo == 'Insert') {
            let j = task.pop();
            let check = false;
            for (const iterator of cards) {
                if (iterator == task[0]) {
                    check = true;
                }
            }
            if (check && j >= 0 && j <= deck.length -1) {
                deck.splice(j, 0, String(task));
            }else{
                console.log("Error!"); 
            }
            
        }else if (toDo == 'Remove') {
            let check = false;
            deck.forEach((element, key) => {
                if (element == task[0]) {
                    deck.splice(key, 1)
                    check = true;
                }
            })
            if (!check) {
                console.log("Card not found.")
            }
        }else if (toDo == 'Swap') {
            let cardOne = task[0];
            let cardTwo = task[1];
            deck.forEach((element, key) => {
                if (element == cardOne) {
                    deck.splice(key, 1 , String(cardTwo) )
                }
                if (element == cardTwo) {
                    deck.splice(key, 1, String(cardOne))
                }
            });
        }else if (toDo == 'Shuffle') {
            deck.reverse()
        }

    }
    console.log(deck.join(' '));
    

}
wizardPoker(['Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
             'Add Moonfire',
             'Add Pounce',
             'Add Bite',
             'Add Wrath',
             'Insert Claw 0',
             'Swap Claw Moonfire',
            'Remove Bite',
            'Shuffle deck',
            'Ready'])