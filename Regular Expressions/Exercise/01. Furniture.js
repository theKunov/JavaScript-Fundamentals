function fur(array) {
    let bought = [];
    let totalCost = 0;
    let workWith = array.slice(0, array.indexOf('Purchase'));
    let regEx = />>(?<item>\w+)<<(?<price>\d+\.?\d+?)!(?<quan>\d+)/g;
    while ((checker = regEx.exec(workWith)) != null){
        let item = checker.groups['item'];
        let price = checker.groups['price'];
        let quantity = checker.groups['quan'];
        bought.push(item);
        totalCost += price * quantity;
    }
    console.log(`Bought furniture:`);
    if (bought.length > 0) {
        console.log(`${bought.join('\n')}`); 
    }
     console.log(`Total money spend: ${totalCost.toFixed(2)}`);
         
}
fur(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase',
])