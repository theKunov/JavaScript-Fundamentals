function solve(arr) {
    let endRes = new Map();
    let words = arr.shift().split(' ').forEach(element => endRes.set(element, 0));
    for (const iterator of arr) {
        if (endRes.has(iterator)) {
           let count = endRes.get(iterator) + 1;
           endRes.set(iterator, count)
        }
        
    }
    let sorted = Array.from(endRes).sort((a, b) => b[1] - a[1] )
    for (const j of sorted) {
        console.log(`${j[0]} - ${j[1]}`);
        
    }
    
}
solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ])