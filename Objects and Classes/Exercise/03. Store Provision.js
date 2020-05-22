function storeDivision(currStock, products) {
    let storeOutPut = {

    }
    for (let index = 0; index < currStock.length; index += 2) {
        let currProduct = currStock[index];
        let currProductQuantity = +currStock[index + 1];
        storeOutPut[`${currProduct}`] = currProductQuantity

    }
    for (let j = 0; j < products.length; j += 2) {
        let productOrder = products[j];
        let productOrderQuantity = +products[j + 1]
        let includedChecker = false;
        for (const key in storeOutPut) {
            if (productOrder == key) {
                storeOutPut[key] += productOrderQuantity;
                includedChecker = true;
            } 

        }
        if (!includedChecker) {
            storeOutPut[`${productOrder}`] = productOrderQuantity;
        }

    }
    let objectToWork = Object.entries(storeOutPut)
   for (const [key, value] of objectToWork) {
       console.log(`${key} -> ${value}`);
       
   }
}
storeDivision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])