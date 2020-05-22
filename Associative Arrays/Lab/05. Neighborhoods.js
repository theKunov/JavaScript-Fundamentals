function solve(arr) {
    let adressToAdd = arr.shift().split(', ');
    let neighborhoods = new Map();
    for (const iterator of adressToAdd) {
        neighborhoods.set(iterator, []);
    }
    for (const iter of arr) {
        let [adress, name] = iter.split(' - ')
        if (neighborhoods.has(adress)) {
            neighborhoods.get(adress).push(name) ;
        }
        
    }
    let sorted = Array.from(neighborhoods).sort((a,b) => b[1].length - a[1].length)
    for (const iterator of sorted) {
        console.log(`${iterator[0]}: ${iterator[1].length}`);
        for (let index = 0; index < iterator[1].length; index++) {
            console.log(`--${iterator[1][index]}`);
            
        }
    }
    
}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'])