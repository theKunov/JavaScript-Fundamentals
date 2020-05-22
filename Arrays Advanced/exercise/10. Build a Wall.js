function buildAWall(array) {
    let newArr = array.map(Number)
    let conctreteUsed = [];
    let costOfWall = 0;
    let conctreteUsedForTheDay = 0;
    while (newArr.length > 0) {
        if (newArr[0] >= 30) {
            break;
        }
        newArr.forEach((element, index) => {
            newArr[index] += 1;
           if (newArr[index] <= 30) {
            conctreteUsedForTheDay += 195;
            costOfWall += 1900 * 195;
           }
            
        });
        conctreteUsed.push(conctreteUsedForTheDay);
        conctreteUsedForTheDay = 0;

        newArr.forEach((element, index) => {
            if (element == 30) {
                newArr.splice(index, 1);
        
            }
        });
      
    }

    console.log(conctreteUsed.join(', '));
    console.log(`${costOfWall} pesos`);
   //[21, 25, 28]
   //[17,22,17,19,17]
}
buildAWall([17])