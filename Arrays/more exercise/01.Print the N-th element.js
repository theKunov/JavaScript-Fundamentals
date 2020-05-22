function nElement(array) {
    let lastEl = Number(array[array.length-1]);
    let outPut = [];
    for (let index = 0; index < array.length-1; index+= lastEl) {
        outPut.push(array[index]);
        
        
        
        
    }
    console.log(outPut.join(' '));
    
}
nElement(['dsa', 'asd', 'test', 'test', '2']
)