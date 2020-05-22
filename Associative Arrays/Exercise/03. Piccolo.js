function solve(arr) {
    let record = new Set();
    for (const iterator of arr) {
        let [command, number] = iterator.split(', ');
        if (command == 'IN') {
            record.add(number)
        }
        if (command == 'OUT') {
                if (record.has(number)) {
                    record.delete(number)
                }
        }
    }
    let sorted = Array.from(record).sort((a,b) => a.localeCompare(b));
 
    
    if (sorted.length > 0) {
        console.log(sorted.join('\n'))
    }else{
        console.log('Parking Lot is Empty');
        
    }
  
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])