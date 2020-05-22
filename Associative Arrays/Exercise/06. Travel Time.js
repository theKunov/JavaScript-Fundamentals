function travel(array) {
    let info = {};
    for (const iterator of array) {
        let [country, town, price] = iterator.split(' > ');
        if (!info.hasOwnProperty(country)) {
            info[country] = {};
        }
            if (info[country].hasOwnProperty(town)) {
                if (info[country][town] > price) {
                    info[country][town] = price;
                }
            }else{
                info[country][town] = price;
            
          }
        
    }
    let sortedByCountry = Object.entries(info).sort((a,b) => {
        return a[0][0].localeCompare(b[0][0]);
    })
    for (let [country, town] of sortedByCountry) {
        let sortedTowns = Object.entries(town)
        .sort((a,b)=> a[1] - b[1]).map(a => a.join(' -> '));
        console.log(`${country} -> ${sortedTowns.join(' ')}`);
        
        
    }
    
}
travel([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])