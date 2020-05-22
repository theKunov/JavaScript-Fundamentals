function solve(array) {
    let chest = array.shift().split('|');


    for (const word of array) {
        let toDo = word.split(' ');
        let command = toDo.shift();
        let gain = 0; 
        if (command === 'Yohoho!') {
            if (chest.length <= 0) {
                console.log('Failed treasure hunt.');
                
            }else{
                for (const item of chest) {
                    gain += Number(item.length)

                }
                console.log(`Average treasure gain: ${(gain / chest.length).toFixed(2)} pirate credits.`);
            }
            
            
            break;
        }
        switch (command) {
            case 'Loot':

                for (const treasure of toDo) {
                    if (!chest.includes(treasure)) {
                        chest.unshift(treasure);
                    }
                }

                break;
            case 'Drop':
                if (toDo[0] >= 0 && toDo[0] < chest.length - 1) {
                    let item = chest.splice(toDo[0], 1);
                    chest.push(String(item));
                }
                break;
            case 'Steal':
                if (toDo[0] > chest.length - 1) {

                    console.log(chest.join(', '));
                    chest = [];

                } else {
                    let stolenItems = chest.splice(chest.length - toDo[0], toDo[0]);
                    console.log(stolenItems.join(', '));
                    
                }
                break;

        }

    }
  
}
solve(['Diamonds|Silver|Shotgun|Gold',
       'Loot Silver Medals Coal',
       'Drop -1',
       'Drop 1',
       'Steal 6',
       'Yohoho!'])