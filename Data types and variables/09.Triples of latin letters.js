function triples(num) {
    for (let i = 0; i < num; i++) {
        for (let n = 0; n < num; n++) {
            for (let j = 0; j < num; j++) {
                console.log(`${String.fromCharCode(i + 97)}${String.fromCharCode(n+ 97)}${String.fromCharCode(j+ 97)}`);
            }
        }
    }
}
triples(3)