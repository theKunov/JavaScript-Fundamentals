function solve(array) {
    let energy = Number(array.shift());
     let counter = 0;
    let wonBattles = 0;

    for (const word of array) {
        if (word == 'End of battle') {
           console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
           
            break;
        }
         let distance = Number(word);
        if (energy - distance >= 0) {
            energy -= distance
            wonBattles++;
            counter++;
        }else{
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            break;
        }
        if (counter == 3) {
            energy += wonBattles;
            counter = 0;
        }

     }

}

solve(['200',
    '54',
    '14',
    '28',
    '13',
    'End of battle'])