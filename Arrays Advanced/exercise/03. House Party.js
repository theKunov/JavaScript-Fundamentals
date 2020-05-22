function houseParty(array) {
    let list = [];
    for (let index = 0; index < array.length; index++) {
        let listItem = array[index].split(' ');
        let guest = listItem[0];
      
        if (listItem.length == 3) {  
            let nameChecker = list.includes(guest);
            
            if (!nameChecker) {
                list.push(guest);
            }else{
                console.log(`${guest} is already in the list!`);
            }
        }else{
            let checkIfGuestRemoved = false;
            list.forEach((element, guestIndex) => {
                
                if (element == guest) {
                    list.splice(guestIndex, 1);
                    checkIfGuestRemoved = true;
                }
                
            });
            if(!checkIfGuestRemoved){
                console.log(`${guest} is not in the list!`);
            }

        }
        
        
    }
    for (const iterator of list) {
        console.log(iterator);
        
    }
    
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])