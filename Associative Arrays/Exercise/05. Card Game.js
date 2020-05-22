function cardGame(array) {
    let output = {};
    function fillingTheObject(arr) {
        for (const iterator of array) {
            let [name, cards] = iterator.split(': ');
            let deck = cards.split(', ');

            if (!output.hasOwnProperty(name)) {
                output[name] = [];
            }
            for (const card of deck) {
                if (!output[name].includes(card)) {
                    output[name].push(card);
                }
            }

        }
    }
    let filltheObj = fillingTheObject(array)

    function calculateValueOfCards(object) {
        for (const key in object) {
            let value = 0;

            for (const iterator of object[key]) {
                let checker = iterator.split('');
                let second = checker.pop();
                let first = checker.join('');
                let valuefirst = 0;
                let valueSecond = 0;
                if (first === 'J') {
                    valuefirst = 11;
                } else if (first === 'Q') {
                    valuefirst = 12;
                } else if (first === 'K') {
                    valuefirst = 13;
                } else if (first === 'A') {
                    valuefirst = 14;
                } else {
                    valuefirst = Number(first);
                }

                if (second === 'S') {
                    valueSecond = 4;
                } else if (second === 'H') {
                    valueSecond = 3;
                } else if (second === 'D') {
                    valueSecond = 2;
                } else if (second === 'C') {
                    valueSecond = 1;
                }
                value += (valuefirst * valueSecond);
            }
            console.log(`${key}: ${value}`);

        }
    }
    let calculation = calculateValueOfCards(output)
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])