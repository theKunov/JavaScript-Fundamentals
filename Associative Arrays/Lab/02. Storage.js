function solve(arr) {
    let outPut = new Map();
    for (const iterator of arr) {
        let [item, quantity] = iterator.split(' ');

        let quantityN = Number(quantity);

        if (outPut.has(item)) {
            quantityN += outPut.get(item);
        }    

        outPut.set(item, quantityN);
    }
    for (const key of outPut) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
    
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])