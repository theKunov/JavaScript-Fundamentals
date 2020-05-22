function account(array) {
    let games = array[0].split(' ')
    let haveGame = false;
    counter = 0;

    while (array[counter] != 'Play!') {
        for (let n = 1; n < array.length; n++) {
            let newArr = array[n].split(' ');
            switch (newArr[0]) {
                case 'Install':
                    for (let j = 0; j < games.length; j++) {
                        if (newArr[1] === games[j]) {
                            haveGame = true;
                        }
                    }
                    if (haveGame) {
                        haveGame = false;
                        break;
                    } else {
                        games.push(newArr[1]);
                        haveGame = false;
                
                    }
                   break;
                case 'Uninstall':
                    for (let j = 0; j < games.length; j++) {
                        if (newArr[1] === games[j]) {
                            haveGame = true;
                        }
                        if (haveGame) {
                            games.splice(j, 1)
                            haveGame = false;
                            break;
                        }
                    }

                    break;
                case 'Update':
                    for (let j = 0; j < games.length; j++) {
                        if (newArr[1] === games[j]) {
                            haveGame = true;
                        }
                        if (haveGame) {
                            let exist = String(games.splice(j, 1));
                            games.push(exist);
                            haveGame = false;
                            break;
                        }
                    }

                    break;
                case 'Expansion':
                    let expansion = newArr[1].split('-')
                    for (let j = 0; j < games.length; j++) {
                        if (expansion[0] === games[j]) {
                            haveGame = true;
                        }
                        if (haveGame) {
                            let putIn = expansion.join(':')
                            games.splice(j+1, 0, putIn);
                            haveGame = false;


                            break;
                        }
                    }

                    break;

            }
            counter++;
        }
    }


    console.log(games.join(' '));
}
account(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!'])