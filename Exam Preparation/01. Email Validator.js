function emailValidator(array) {
    let name = array.shift();
    let command = array.shift().split(' ');
    while (command[0] !== 'Complete') {
       
        if (command[1] == 'Upper') {
            name = name.toUpperCase();
            console.log(name);
        }else if (command[1] == 'Lower') {
            name = name.toLowerCase();
            console.log(name);
        }else if (command[0] == 'GetDomain') {
            let print = name.slice(name.length - Number(command[1]));
            console.log(print);
        }else if (command[0] == 'GetUsername') {
           
            if (!name.includes('@')) {
                console.log(`The email ${name} doesn't contain the @ symbol.`);
            }else{
                let index = name.indexOf('@');
                let toPrint = name.slice(0, index);
                console.log(toPrint);
            }
        }else if (command[0] == 'Replace') {
            let newName = name.split('');
            newName.forEach((letter , key) => {
                if (letter == command[1]) {
                    newName[key] = '-';
                }
                
            });
            name = newName.join('');
            console.log(name);
            
        }else if (command[0] == 'Encrypt') {
            let nameToASCII = name.split('').map(a => a.charCodeAt());
            console.log(nameToASCII. join(' '));
        }
     
        command = array.shift().split(' ');
    }
}
emailValidator(['Mike123@somemail.com',
                'Make Upper',
                'GetDomain 3',
                'GetUsername',
                'Replace A',
                'Encrypt',
                'Complete'])