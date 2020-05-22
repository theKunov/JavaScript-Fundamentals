function solve(arr) {

    let regExp = /@#{1,}(?<code>[A-Z][0-9A-Za-z]{4,}[A-Z])@#{1,}/g;
    arr.shift();
    for (const barcode of arr) {
        let checker = regExp.exec(barcode);
        let category = '';
        if (checker !== null) {
            let codeASCII = checker.groups['code'].split('').map(a => a.charCodeAt());
            for (const code of codeASCII) {
                if (code >= 48 && code <= 57) {
                    category += String.fromCharCode(code);
                }
            }
            if (category == '') {
                console.log(`Product group: 00`);
                category = '';
            } else {
                console.log(`Product group: ${category}`);
                category = '';
            }

        } else {
            console.log('Invalid barcode');

        }

        checker = regExp.exec(barcode);
    }

}
solve([6,
       '@###Val1d1teM@###',
       '@#ValidIteM@#',
       '##InvaliDiteM##',
       '@InvalidIteM@',
       '@#Invalid_IteM@#',
       '@#ValiditeM@#'])