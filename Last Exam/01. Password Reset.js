function passwordReset(array) {

    let password = array.shift();
    let newPassword = '';
    for (const word of array) {
        let [command, one, two] = word.split(' ');
        if (command == 'Done') {
            console.log(`Your password is: ${password}`);
            break;
        }
        switch (command) {
            case 'TakeOdd':
                let use = password.split('');
                for (let index = 0; index < use.length; index++) {
                    if (index % 2 !== 0) {
                        newPassword += use[index];
                    }

                }
                password = newPassword;
                newPassword = '';
                console.log(password);

                break;
            case 'Cut':
                let wordToRemove = password.substr(one, two);
                
                    password = password.replace(wordToRemove, '')
            
                
                console.log(password);
                break;
            case 'Substitute':
                if (password.includes(one)) {
                    while (password.includes(one)) {
                        password = password.replace(one, two)
                    }

                    console.log(password);

                } else {
                    console.log('Nothing to replace!');

                }
                break;

        }
    }
}
passwordReset(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'])