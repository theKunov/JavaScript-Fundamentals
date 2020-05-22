function race(array) {
    let racers = {};
    let names = array.shift().split(', ').forEach(element => {
        racers[element] = 0;
    });
    let score = array.shift();
    while (score !== 'end of race') {
        let namesRegEx = /[A-Za-z]/g;
        let name = score.match(namesRegEx).join('');
        
        let milesRegEx = /\d/g;
        let miles = score.match(milesRegEx).map(Number).reduce((a, b) => (a+b));
        if (racers.hasOwnProperty(name)) {
            racers[name] += miles;
        }
        
        score = array.shift();
    }
    
    let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    for (let index = 0; index < 3; index++) {
        let [name, score] = sorted[index];
        if (index == 0) {
            console.log(`1st place: ${name}`);
        }else if(index == 1){
            console.log(`2nd place: ${name}`);
        }else if(index == 2){
            console.log(`3rd place: ${name}`);
        }
    }
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])