function convert(stringJSON) {
    let object = JSON.parse(stringJSON);
    let objectToArray = Object.entries(object);
    Object.entries()
    
    for (const [key, value] of objectToArray) {
        console.log(`${key}: ${value}`);
        
    }
    
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')