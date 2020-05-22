function fuelMoney(distance , passengers, price) {
    let fuelNeeded = (distance / 100) * 7 ;
    fuelNeeded += passengers * 0.1;
    let money = fuelNeeded * price;
    console.log(`Needed money for that trip is ${money}lv.`);
    
}
fuelMoney(260, 9, 2.49)