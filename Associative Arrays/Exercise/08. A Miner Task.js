function minerTask(array) {
    let store = {}
    for (let index = 0; index < array.length-1; index+=2) {
        const element = array[index];
        const quantity = Number(array[index+1]);
        if (!store.hasOwnProperty(element)) {
            store[element] = 0;
        }
        store[element] += quantity;
    }
    let print = Object.entries(store);
    for (const iterator of print) {
        console.log(`${iterator[0]} -> ${iterator[1]}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])