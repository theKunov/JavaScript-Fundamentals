function reverse(arr) {
    let element = '';
    for (let index = arr.length-1; index >= 0 ; index--) {
        element += arr[index] + ' ';
        
    }
    console.log(element);
    
}
reverse(['abc', 'def', 'hig', 'klm', 'nop'])