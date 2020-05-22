function solve(array1, array2) {
    for (let index = 0; index < array1.length; index++) {
        for (let n = 0; n < array2.length; n++) {
            if (array1[index] === array2[n]) {
                console.log(array2[n]);
                
            }
            
        }
        
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])