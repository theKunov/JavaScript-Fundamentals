function solve(array) {
    array.forEach(element => {
        let numOne = element;
        let numTwo = String(element).split('').reverse().join('');
       if (numOne != numTwo) {
           console.log('false');
           
       }else{
           console.log('true');
           
       }
       
        
    });
}
solve([32,2,232,1010])