function dark(rooms) {
    let array = rooms[0].split('|');
    let health = 100;
    let coins = 0;
    let room = 0;

    for (let index = 0; index < array.length; index++) {
        let currRoom = array[index].split(' ')
        let task = currRoom[0];
        let num = Number(currRoom[1]);
        room++;
        if (task === 'potion') {
            
            if (health + num > 100) {
                let nowNum = 100 - health;
                health = 100;
                console.log(`You healed for ${nowNum} hp.\nCurrent health: ${health} hp.`);
            } else {
                health += num;
                console.log(`You healed for ${num} hp.\nCurrent health: ${health} hp.`);
            }
               
        }else if (task === 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);
            
        }else{
           health -= num;
            if (health <= 0) {
                console.log(`You died! Killed by ${task}.`);
                break;
            }else{
                console.log(`You slayed ${task}.`);
                
            }
        }


    }
    if (health <= 0) {
        console.log(`Best room: ${room}`);
        
    }else{
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
        
    }

}
dark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])