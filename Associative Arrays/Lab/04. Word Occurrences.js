function solve(arr) {
    let outPut = new Map();
    for (const iterator of arr) {
        if (!outPut.has(iterator)) {
            outPut.set(iterator , 1)
        }else{
          let number = outPut.get(iterator) + 1;
          outPut.set(iterator, number)
        }
        
    }
   let sorted = Array.from(outPut).sort((a,b) => b[1] - a[1])
    for (const key of sorted) {
        console.log(`${key[0]} -> ${key[1]} times`);
        
    }
    
}
solve(["Here", "is", "the", "first", 
"sentence", "Here", "is", "another",
 "sentence", "And", "finally", "the", 
 "third", "sentence"])