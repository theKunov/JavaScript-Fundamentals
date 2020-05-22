function solve(array) {
    let person = {
    }
    
    for (let index = 0; index < array.length; index++) {
        person.name = array[index];
        let personalInfo = array[index].split('');
        person.personInfo = personalInfo.length;
        console.log(`Name: ${person.name} -- Personal Number: ${person.personInfo}` );   
    }
    
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])