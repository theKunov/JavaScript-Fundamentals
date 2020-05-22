function solve(arr) {
    let outPut = {};
    for (const iterator of arr) {
        let [name, number] = iterator.split(' ');
        outPut[name] = number;
    }
    for (const key in outPut) {
        console.log(`${key} -> ${outPut[key]}`);
        
    }
}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])