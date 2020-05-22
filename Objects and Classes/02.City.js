function city(cityName, area, population, country, postCode) {
    let cityInfo = {
        name: cityName,
        area,
        population,
        country,
        postCode
    }
    let cityInfoToArr = Object.entries(cityInfo)
    for (const [key, value] of cityInfoToArr) {
        console.log(`${key} -> ${value}`);
        
    }
    
}
city("Sofia", " 492", "1238438", "Bulgaria", "1000")