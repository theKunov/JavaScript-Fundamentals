function party(array) {
    let counter = 0;
    let output = {
        vip: [],
        regular: [],
    }
    for (const guest of array) {
        if (guest === 'PARTY') {
            counter++;
            break;
        }
        if (isNaN(Number(guest[0]))) {
            output.regular.push(guest);
        }else{
            output.vip.push(guest);
        }
        counter++;
    }
    array.splice(0, counter)
    for (const iterator of array) {
        if (output.vip.includes(iterator)) {
            let index = output.vip.indexOf(iterator);
            output.vip.splice(index, 1);
        }else if(output.regular.includes(iterator)){
            let index = output.regular.indexOf(iterator);
            output.regular.splice(index, 1);
        }
        
    }
    
    console.log(`${output.vip.length + output.regular.length}`)
    for (const iterator in output) {
        for (const blabla of output[iterator]) {
            console.log(blabla);
            
        }
        
    }    

}
party(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])