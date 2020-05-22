function solve(array) {
    let outPut = {};
    for (let index = 0; index < array.length; index++) {
        let [systemName, componentName, subcomponentName]  = array[index].split(' | ');

        if (!outPut.hasOwnProperty(systemName)) {
           outPut[systemName] = [];
        }
        if (!outPut[systemName].hasOwnProperty(componentName)) {
            outPut[systemName][componentName] = [];
        }
            outPut[systemName][componentName].push(subcomponentName);
    }

    let sortedSystems = Object.keys(outPut).sort((a, b) => Object.keys(outPut[b]).length - Object.keys(outPut[a]).length || a.localeCompare(b))
    sortedSystems.forEach((element) => {
        console.log(element);
        let sortedComponents = Object.keys(outPut[element]).sort((a, b) => Object.keys(outPut[element][b]).length - Object.keys(outPut[element][a]).length )
        sortedComponents.forEach(key => {
            console.log(`|||${key}`);
            outPut[element][key].forEach(subC => {
                console.log(`||||||${subC}`);
                
            });
            
        });
    });
}
solve(['SULS | Main Site | Home Page',
       'SULS | Main Site | Login Page',
       'SULS | Main Site | Register Page',
       'SULS | Judge Site | Login Page',
       'SULS | Judge Site | Submittion Page',
       'Lambda | CoreA | A23',
       'SULS | Digital Site | Login Page',
       'Lambda | CoreB | B24',
       'Lambda | CoreA | A24',
       'Lambda | CoreA | A25',
       'Lambda | CoreC | C4',
       'Indice | Session | Default Storage',
       'Indice | Session | Default Security'])