function solve(word, text) {
    let result = text.toLowerCase();
    let check = word.toLowerCase();
    let checker = false;
    let workWith = result.split(' ')
    for (const m of workWith) {
        if (m === check) {
            console.log(word);
            checker = true;
            break;
        }
    }
    if (!checker) {
        console.log(`${word} not found!`);
    }

}
solve('javascript',
'JavaScript is the best programming language')