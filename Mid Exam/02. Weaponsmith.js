function weaponsmith(arr) {
    let list = arr.shift().split('|');
    //console.log(list);
    for (let index = 0; index < arr.length; index++) {
        let task = arr[index].split(' ');
        let toDo = task[2]
        if (task[0] == 'Done') {
            break;
        } else if (task[1] == 'Left') {
            let moveTo = +toDo - 1;
            if (moveTo >= 0 && moveTo <= list.length - 1) {
                let move = String(list.splice(task[2], 1));
                list.splice(moveTo, 0, move)
            }

        } else if (task[1] == 'Right') {
            let moveTo = +toDo + 1;
            if (moveTo >= 0 && moveTo <= list.length - 1) {
                let move = String(list.splice(task[2], 1));
                list.splice(moveTo, 0, move)
            }

        } else if (task[1] == 'Even') {
            let print = [];
            for (let index = 0; index < list.length; index++) {
                if (index % 2 == 0) {
                    print.push(list[index]);
                }
            }
            console.log(print.join(' '));

        } else if (task[1] == 'Odd') {
            let print = [];
            for (let index = 0; index < list.length; index++) {
                if (index % 2 !== 0) {
                    print.push(list[index]);
                }
            }
            console.log(print.join(' '));

        }
    }
    console.log(`You crafted ${list.join('')}!`);




}
weaponsmith(['ri|As|er|hb|ng',
             'Move Left 1',
             'Move Right 2',
             'Move Right 3',
             'Move Left 2',
             'Done'])