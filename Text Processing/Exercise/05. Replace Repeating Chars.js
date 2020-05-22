function solve(string) {
    let result = string[0];
    for (let index = 1; index < string.length; index++) {
        let key = string[index];
        let keyTwo = string[index-1];
        if (key !== keyTwo) {
            result += key;
        }
        
    }
    console.log(result);
    
}
solve('aaaaabbbbbcdddeeeedssaa')