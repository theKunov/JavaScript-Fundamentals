function kNumbers(array) {
    let k = array.shift()
    let beginArray = array.slice(0 , k);
    let endArray = array.reverse().slice(0, k)
    console.log(beginArray.join(' '));
    console.log(endArray.reverse().join(' '));
}
kNumbers([3,
    6, 7, 8, 9])