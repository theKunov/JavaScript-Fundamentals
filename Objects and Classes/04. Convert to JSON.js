function convertToJSON(name, lastName, hairColor) {
    let personInfo = {
        name,
        lastName,
        hairColor
    }
    let outPut = JSON.stringify(personInfo);
    console.log(outPut);
    
    
}
convertToJSON('George',
    'Jones',
    'Brown')