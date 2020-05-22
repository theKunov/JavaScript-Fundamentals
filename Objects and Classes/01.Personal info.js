function personalInfo(firstName, lastName, age) {
    let info = {
        firstName,
        lastName,
        age
    }
    let entries = Object.entries(info);
     for (const [key, value] of entries) {
         console.log(`${key}: ${value}`);
         
     }
     
}
personalInfo("Peter", 
"Pan",
"20")