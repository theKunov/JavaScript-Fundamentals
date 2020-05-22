function orders(product, quantity) {
    switch (product) {
        case 'coffee':
            return (quantity * 1.5).toFixed(2)
            break;
        case 'water':
            return (quantity * 1.00).toFixed(2)
            break;
        case 'coke':
            return (quantity * 1.40).toFixed(2)
            break;
        case 'snacks':
            return (quantity * 2.00).toFixed(2)
            break;
    }
}
console.log(orders('coffee', 5));
