function solve(array) {
    let heroes = [];
    for (const iterator of array) {
        let character = iterator.split(' / ');
        
        let items = character[2].split(', ').sort((a, b) => a.localeCompare(b));
        
        heroes.push({
            'Hero': character[0],
            level: character[1],
            items: items
        });
        
        
    }
    heroes.sort((a,b)=> (a.level - b.level))
   
    for (const char of heroes) {
        let [hero, level, items] = Object.entries(char);
        let heroKey = hero.shift();
        let levelKey = level.shift();
        let itemsKey = items.shift();
        level = level.map(Number)
        console.log(`Hero: ${hero}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items[0].join(', ')}`);
        
    }
    
    
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ])