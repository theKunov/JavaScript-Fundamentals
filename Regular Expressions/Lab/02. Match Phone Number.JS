function solve(text) {
    let regexp = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let result = [];
    let checker = [];
    while ((checker = regexp.exec(text)) != null) {
        result.push(checker[0]);
    }
    console.log(result.join(', '));
    
}
solve(['+359-2-222-2222, +359/2/222/2222, +359-2 222 222, +359 2-222-2222, +359-2-222-222, +359-2-222-22222'])