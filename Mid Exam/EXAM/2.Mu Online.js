function muOnline(array) {
    let health = 100;
    let bitcoins = 0;
    let counter = 0;
    let rooms = array[0].split('|');
    for (let index = 0; index < rooms.length; index++) {
        let room = rooms[index].split(' ');
        let command = room[0];
        let number = Number(room[1]);
        counter++;
        if (command == 'potion') {
           
            if (health + number > 100) {
                
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            } else {
                health += number;
                console.log(`You healed for ${number} hp.`);
            }

            console.log(`Current health: ${health} hp.`);

        } else if (command == 'chest') {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);

        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${command}.`);

            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${counter}`);
                return;

            }
        }


    }

    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);

}
muOnline(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])