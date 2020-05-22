function matched(first , char, second) {
    let newWord = first.replace("_" , char);
    let endResult = newWord === second ? "Matched" : "Not Matched";
    console.log(endResult);
    
}
matched('Str_ng', 'I', 'String')