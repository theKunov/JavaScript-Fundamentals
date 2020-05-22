function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let counter = 0;
    let secondCounter = 0;
    if (base % 2 == 0) {
        while (base >= 2) {
            secondCounter++;
            if (base == 2) {
                gold += base * base;
                break;
            }
            let stoneFloor = (base - 2) * (base - 2);
            let marbleFloor = base * base - stoneFloor;
            stone += stoneFloor;
            base -= 2;
            counter++;
            
            if (counter == 5) {
                lapisLazuli += marbleFloor;
                counter = 0;
            } else {
                marble += marbleFloor;
            }
            

        }
    }else{
        while (base >= 1) {
            secondCounter++;
            if (base == 1) {
                gold += base * base;
                break;
            }
            let stoneFloor = (base - 2) * (base - 2);
            let marbleFloor = base * base - stoneFloor;
            stone += stoneFloor;
            base -= 2;
            counter++;
            
            if (counter == 5) {
                lapisLazuli += marbleFloor;
                counter = 0;
            } else {
                marble += marbleFloor;
            }
            

        }
    }
    console.log(`Stone required: ${Math.ceil(stone*increment)}`);
    console.log(`Marble required: ${Math.ceil(marble*increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli*increment)}`);
    console.log(`Gold required: ${Math.ceil(gold*increment)}`);
    console.log(`Final pyramid height: ${Math.floor(secondCounter*increment)}`);
    
    

}
pyramid(23, 0.5)