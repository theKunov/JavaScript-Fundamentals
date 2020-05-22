function range(charOne, charTwo) {
    let symbolOne = charOne.charCodeAt();
    let symbolTwo = charTwo.charCodeAt();
    let outPut = '';
    

    if (symbolOne < symbolTwo) {
        let begining = symbolOne +1;
        for (let index = begining; index < symbolTwo; index++) {
            outPut += String.fromCharCode(index) + ' ';

        }
    } else {
        let begining = symbolTwo +1;
        for (let index = begining; index < symbolOne; index++) {
            outPut += String.fromCharCode(index) + ' ';

        }
    }
    console.log(outPut);

}
range('a',
'd')