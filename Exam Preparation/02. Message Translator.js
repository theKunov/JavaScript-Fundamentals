function translator(array) {
    array.shift();
    let regexp = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/g;
    for (const comm of array) {
        let text = regexp.exec(comm)
        if (text !== null) {
            let command = text.groups['command'];
            let message = text.groups['message'].split('').map(a => a.charCodeAt());
            
            console.log(`${command}: ${message.join(' ')}`);
            
            
        }else{
            console.log('The message is invalid');
            
        }
    }
}
translator(['!Send!:[IvanisHere]',
            '*Time@:[Itis5amAlready]',
            'go:[outside]',
            '!drive!:YourCarToACarWash',
            '!Watch!:[LordofTheRings]'])