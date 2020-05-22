function rotator(array, num) {
    for (let i = 0; i < num; i++) {
      let firstElement = array.shift();
      array.push(firstElement);
    }
    
  console.log(array.join(' '));
}
rotator([51, 47, 32, 61, 21], 2)