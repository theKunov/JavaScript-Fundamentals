function companyUsers(arr) {
    let store = {};
    for (const iterator of arr) {
        let [name, employee] = iterator.split(' -> ');
        if (!store.hasOwnProperty(name)) {
            store[name] = [];
            store[name].push(employee)
        }else{
            if (!store[name].includes(employee)) {
                store[name].push(employee);
            }
            
        }
    }
    let sorted = Object.entries(store).sort((a,b)=> a[0].localeCompare(b[0]))
    for (const [company, names] of sorted) {
        console.log(`${company}\n-- ${names.join('\n-- ')}`);
        
    }
    
    
}
companyUsers([
'SoftUni -> AA12345',
'SoftUni -> CC12344',
'Lenovo -> XX23456',
'SoftUni -> AA12345',
'Movement -> DD11111',
    ])