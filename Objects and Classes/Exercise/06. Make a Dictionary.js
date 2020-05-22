function solve(array) {
    let dictionary = [];
    for (const iterator of array) {
        let word = JSON.parse(iterator);

        let term = Object.keys(word);
        term = term[0];
        let definition = Object.values(word);
        definition = definition[0];

        dictionary.push({
            term,
            definition
        });
    }
    for (let index = 0; index < dictionary.length - 1; index++) {
        for (let j = index + 1; j < dictionary.length; j++) {
            if (dictionary[index].term === dictionary[j].term) {
                dictionary.splice(index, 1);
                index = 0;
                j = index + 1;
            }

        }
    }
    dictionary.sort((a,b) => a.term.localeCompare(b.term));
    
    for (const iterator of dictionary) {
        console.log(`Term: ${iterator.term} => Definition: ${iterator.definition}`); 
    }

}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])