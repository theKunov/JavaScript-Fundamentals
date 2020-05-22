function solve(arr) {
    let outPut = new Map();
    for (const iterator of arr) {
        let information = iterator.split(' ');
        let name = information.shift();
        let nums = information.map(Number);
        if (outPut.has(name)) {
            nums = outPut.get(name).concat(nums);
        }
        outPut.set(name, nums);
    }
    let toSort = Array.from(outPut).sort((a, b) => {
       return average(a, b);

    })
    function average(a, b) {
        let sumA = 0;
        let sumB = 0;
        for (let index = 0; index < a[1].length; index++) {
            sumA += a[1][index];
        }
        for (let index = 0; index < b[1].length; index++) {
            sumB += b[1][index];
        }
        let averageA = sumA / a[1].length;
        let averageB = sumB / b[1].length;
        return averageA - averageB;
    }
    let endResult = new Map(toSort);
    for (const [key, values] of endResult) {
  
        console.log(`${key}: ${values.join(', ')}`);
        
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])