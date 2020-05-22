function solve(arr) {
    let gladiators = {};

    function fillInfo(array) {
        for (const iterator of array) {
            if (iterator === 'Ave Cesar') {
                break;
            }
            let [name, technique, skill] = iterator.split(' -> ');

            if (skill !== undefined) {                 // to fill the object
                if (!gladiators.hasOwnProperty(name)) {
                    gladiators[name] = {};
                }
                if (!gladiators[name].hasOwnProperty(technique)) {
                    gladiators[name][technique] = skill;
                } else {
                    if (gladiators[name][technique] < skill) {
                        gladiators[name][technique] = skill;
                    }
                }
            } else {                                   // to fight the gladiators
                let [nameOne, vs, nameTwo] = name.split(' ');
                if (gladiators.hasOwnProperty(nameOne) && gladiators.hasOwnProperty(nameTwo)) {
                    let first = Object.entries(gladiators[nameOne]);
                    let second = Object.entries(gladiators[nameTwo]);
                    let firstTotalSkill = Object.values(gladiators[nameOne]).reduce((a, b)=> Number(a)+ Number(b));
                    let secondTotalSkill = Object.values(gladiators[nameTwo]).reduce((a, b)=> Number(a)+ Number(b));
                    for (const tech of first) {
                        for (const iterator of second) {
                            if (tech[0] === iterator[0]) {
                                if (firstTotalSkill > secondTotalSkill) {
                                    delete gladiators[nameTwo];
                                    break;
                                }else if(secondTotalSkill > firstTotalSkill){
                                    delete gladiators[nameOne];
                                    break;
                                }
                            }
                        }
                        
                    }
                }
            }

        }
    }
    let sorted = Object.entries(gladiators).sort((a,b) =>{
        let x= Object.values(a[1]).reduce((a,b) => a + b);
        let y= Object.values(b[1]).reduce((c,d) => c + d);
        let result = y - x;
        if (result === 0) {
            return a.localeCompare(b);
        }else{
            return y-x;
        }
    })
    for (let sort of sorted) {
        let sum = Object.values(sort[1]).reduce((a, b) => (a + b));
        console.log(`${sort[0]}: ${sum} skill`);
        let sortedAttributes = Object.entries(sort[1]).sort((a, b) => {
            let result = b[1] - a[1];
            if (result === 0) {
                return a[0].localeCompare(b[0]);
            } else {
                return result;
            }
        });
        for (let sort of sortedAttributes) {
            console.log(`- ${sort[0]} <!> ${sort[1]}`);
        }
    }
    let fill = fillInfo(arr)
}
solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])