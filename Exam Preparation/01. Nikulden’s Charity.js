function charity(array) {
    let massage = array.shift();
    for (const command of array) {
        let [toDo, one, two] = command.split(' ');
        if (toDo == 'Finish') {
            break;
        }
        switch (toDo) {
            case 'Replace':
                while (massage.includes(one)) {
                    massage = massage.replace(one, two);
                }
                console.log(massage);
                
                break;
            case 'Cut':
                if (one > massage.length || two < 0 || two > massage.length) {
                    console.log('Invalid indexes!');
                    break;
                }
                let word = massage.substr(one, two);
                massage = massage.replace(word, '')
                console.log(massage);

                break;

            case 'Make':
                if (one == 'Upper') {
                    massage = massage.toUpperCase();
                }else if(one == 'Lower'){
                    massage = massage.toLowerCase();
                }
                console.log(massage);
                
                break;

            case 'Check':
                if (massage.includes(one)) {
                    console.log(`Message contains ${one}`);
                    
                }else{
                    console.log(`Message doesn't contain ${one}`);
                }
                break;
            case 'Sum':
                if (one < 0 ||one > massage.length -1 || two > massage.length) {
                    console.log("Invalid indexes!");
                    break;
                }
                let wordToSum = massage.substr(one, two).split('');
                let sum = 0;
                
                for (const letter of wordToSum) {
                    sum += letter.charCodeAt();
                    
                }
                console.log(sum);
                

                break;

        }
    }
}
charity(['HappyNameDay',
    'Replace a e',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'])