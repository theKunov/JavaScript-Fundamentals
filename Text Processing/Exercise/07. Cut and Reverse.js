function solve(text) {
    let length = text.length;
    let firstHalf = text.split('').slice(0, length/2).reverse();
    let secondHalf = text.split('').slice(length/2).reverse();
    console.log(firstHalf.join(''));
    console.log(secondHalf.join(''));
 
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')