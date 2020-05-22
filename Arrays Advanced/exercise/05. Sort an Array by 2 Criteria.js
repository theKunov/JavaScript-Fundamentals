function sortArray(array) {
    
    let sortedArr = array.sort((a, b) => {
       return a.length - b.length ||  a.localeCompare(b);
    });

    for (const key of sortedArr) {
       console.log(key);  
    }
    
}
sortArray(["alpha", "beta", "gamma"])