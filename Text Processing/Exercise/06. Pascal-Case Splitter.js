function solve(text) {
    let towork = text.split('');
    let output = [];
    let firstword = true;
    let word = '';
    for (const iterator of towork) {
        let checker = iterator.charCodeAt();
        if (checker >= 65 && checker <= 90 && !firstword) {
            output.push(word);
            word = '';
            word += iterator;
        }else{
            word += iterator;
            firstword = false;
        }
        
    }
    output.push(word)
    console.log(output.join(', '));
    
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')