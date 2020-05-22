function inboxManager(array) {
    let users = {};
    for (const iterator of array) {
        let [command, user, text] = iterator.split('->');
        if (command == 'Statistics') {
            let toDo = stats(users)
            break;
        }
        switch (command) {
            case 'Add':
                if (!users.hasOwnProperty(user)) {
                    users[user] = [];
                } else {
                    console.log(`${user} is already registered`);
                }
                break;
            case 'Send':
                let toDo = send(users, user, text)
                break;
            case 'Delete':
                if (users.hasOwnProperty(user)) {
                    let toDo = del(users, user);
                } else {
                    console.log(`${user} not found!`);
                }
                break;
        }

    }
    function send(users, user, text) {
        users[user].push(text);
    }
    
    function del(users, user) {
        delete users[user];
    }
    
    function stats(users) {
        let sorted = Object.entries(users).sort((a,b) => {
            if (a[1].length == b[1].length) {
               return a[0].localeCompare(b[0]);
            }else{
               return b[1].length - a[1].length;
            }
            })
        //console.log(sorted);
        
        console.log(`Users count: ${Object.keys(users).length}`);
        for (const name of sorted) {
            console.log(name[0]);
            for (const text of name[1]) {
                console.log(` - ${text}`);
            }
            
        }
        
    }
}


inboxManager(['Add->Mike',
              'Add->George',
              'Send->George->Hello World',
              'Send->George->Some random test mail',
              'Send->Mike->Hello, do you want to meet up tomorrow?',
              'Send->George->It would be a pleasure',
              'Send->Mike->Another random test mail',
              'Statistics'
])