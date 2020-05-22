function listOfProduts(array) {
    let newOrder = array.sort();
    for (let index = 1; index <= array.length; index++) {
        console.log(`${index}.${newOrder[index-1]}`);
        
        
    }
    
}
listOfProduts(["Potatoes", "Tomatoes", "Onions", "Apples"])