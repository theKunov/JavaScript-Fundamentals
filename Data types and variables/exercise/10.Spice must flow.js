function spice(num) {
   let daysWork = 0;
   let extract = 0;

   let extractAmount = num;
    while (num >= 100){
        if (num < 26) {
            break;
        }
        extract += (extractAmount - 26);
        extractAmount -= 10;
        num -= 10;
        daysWork++;
        if (num < 100) {
            extract -= 26;
        }

    }
    console.log(`${daysWork} \n${extract}`);
    
}
spice(111)