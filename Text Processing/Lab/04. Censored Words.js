function solve(str, word) {
    let result = str;
    while (result.indexOf(word) !== -1) {
        result = result.replace(word, '*'.repeat(word.length));
    }
    console.log(result);
    
}
solve("A small sentence with some words", "small")