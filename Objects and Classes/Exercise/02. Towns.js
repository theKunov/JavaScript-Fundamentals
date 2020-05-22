function town(array) {
    let townInfo = {

    }
    for (let index = 0; index < array.length; index++) {
        let town = array[index].split(' | ');
        townInfo.town = town[0];
        townInfo.latitude = Number(town[1]).toFixed(2);
        townInfo.longitude = Number(town[2]).toFixed(2);
        console.log(townInfo); 
    }
}
town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)