function catalog(array) {
    let outPut = [];
    for (const iterator of array) {
        let product = iterator.split(' : ');
        outPut.push({
            productName: `${product[0]}`,
            productPrice: `${Number(product[1])}`,
        });


    }

    outPut.sort((a, b) => (a.productName.toLowerCase().localeCompare(b.productName.toLowerCase()))
    );

        for (let index = 0; index < outPut.length; index++) {
            let [product, price] = Object.values(outPut[index]);
            let checker = product.split('');
            checker = checker[0];
            

            if (product.startsWith(`${checker}`)) {
                console.log(checker);
                for (let j = 0; j < outPut.length; j++) {
                    let [product, price] = Object.values(outPut[j]);
                    let know = outPut.indexOf(outPut[j]);
                    if (product.startsWith(`${checker}`)) {
                        console.log(`  ${product}: ${price}`);
                        outPut.splice(know, 1);
                        j -= 1;
                    }
                }
            }
            index -= 1;
        }

}
catalog(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])