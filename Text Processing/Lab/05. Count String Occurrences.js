function solve(text, word) {
    let result = text.split(' ');
    let counter = 0;
    for (const iterator of result) {
        if (iterator === word) {
            counter++;
        }
    }
    console.log(counter);
    
}
solve("This is a word and it also is a sentence",
"is")