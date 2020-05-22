function solve(array) {
    let heroes = {};
    let numberOfHeroes = array.shift();
    for (let index = 0; index < numberOfHeroes; index++) {
        let [hero, hitPoints, mana] = array[index].split(' ');
        heroes[hero] = [Number(hitPoints), Number(mana)]

    }
    let play = array.slice(2);
    for (const word of play) {
        let [command, name, one, two] = word.split(' - ');
        if (command == 'End') {
            if (heroes.length == 0) {
                break;
            }
            let counter = 0;
            let sorted = Object.entries(heroes).sort((a,b) => {
                if (a[1][0] == b[1][0]) {
               return a[0].localeCompare(b[0]);
            }else{
               return b[1][0] - a[1][0];
            }
                   
                })
            for (const name of sorted) {
                console.log(name[0]);
                for (const text of name[1]) {
                    if (counter == 0) {
                        console.log(`  HP: ${text}`);
                        counter++;
                    }else{
                        console.log(`  MP: ${text}`);
                        counter = 0;
                    }
                    
                }
                
            }
            
            break;
        }
        switch (command) {
            case 'CastSpell':
                if (heroes[name][1] >= Number(one)) {
                    heroes[name][1] = heroes[name][1] - Number(one);

                    console.log(`${name} has successfully cast ${two} and now has ${heroes[name][1]} MP!`);
                    
                }else{
                    console.log(`${name} does not have enough MP to cast ${two}!`);
                    
                }
                break;
            case 'TakeDamage':
                heroes[name][0] = heroes[name][0] - Number(one);
                if (heroes[name][0] > 0) {
                    console.log(`${name} was hit for ${one} HP by ${two} and now has ${heroes[name][0]} HP left!`);
                    
                }else{
                    delete heroes[name];
                    console.log(`${name} has been killed by ${two}!`);
                }
                break;
            case 'Recharge':
                let RechNum = 200 - heroes[name][1];
                heroes[name][1] = heroes[name][1] + Number(one);
                if (heroes[name][1] > 200) {
                    heroes[name][1] = 200; 
                    console.log(`${name} recharged for ${RechNum} MP!`);
                }else{
                    console.log(`${name} recharged for ${one} MP!`);
                }
                
                
                break;
            case 'Heal':
                let healNum = 100 - heroes[name][0];
                heroes[name][0] = heroes[name][0] + Number(one);
                
                if (heroes[name][0] > 100) {
                    heroes[name][0] = 100; 
                    console.log(`${name} healed for ${healNum} HP!`);
                }else{
                    console.log(`${name} healed for ${one} HP!`);
                }
                
                
                break;


        }
    }


}
solve(['2',
       'Solmyr 85 120',
       'Kyrre 99 50',
       'Heal - Solmyr - 10',
       'Recharge - Solmyr - 50',
       'TakeDamage - Kyrre - 66 - Orc',
       'CastSpell - Kyrre - 15 - ViewEarth',
       'End'])