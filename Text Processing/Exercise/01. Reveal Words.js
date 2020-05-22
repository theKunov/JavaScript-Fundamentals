function revealWords(str, text) {
    let words = str.split(', ');
    let result = text;
    for (const word of words) {
        let toLook = '*'.repeat(word.length);
        result = result.replace(toLook, word);
    }
    console.log(result);
    
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')