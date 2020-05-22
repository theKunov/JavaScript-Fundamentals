function factory(arr) {
    let [biscuitPerDay, workers, otherFactory] = arr;
    let counter = 0; 
    let allProduction = 0;

    for (let index = 0; index < 30; index++) {
        let productionForTheDay = biscuitPerDay * workers;
        counter++;
        if (counter === 3) {
            productionForTheDay = Math.floor(productionForTheDay * 0.75);
            counter = 0;
        }
        allProduction += productionForTheDay;
    }
    console.log(`You have produced ${allProduction} biscuits for the past month.`);
    if (allProduction > otherFactory) {
        let diff = allProduction - otherFactory
        let percentage = ((diff/ otherFactory) *100).toFixed(2);
        console.log(`You produce ${percentage} percent more biscuits.`);
        
    }else {
        let diff = otherFactory -allProduction;
        let percentage = ((diff / otherFactory) * 100).toFixed(2);
        console.log(`You produce ${percentage} percent less biscuits.`);
        
    }
}
factory([78,
    8,
    16000])