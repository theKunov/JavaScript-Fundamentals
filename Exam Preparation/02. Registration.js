function registration(array) {
    let regExp = /^(U\$)(?<user>[A-Z][a-z]{2,})\1(P@\$)(?<pass>[A-Za-z]{5,}\d+)\3$/g;
    array.shift();
    let countRegistrations = 0;
    for (const reg of array) {  
        let userReg = regExp.exec(reg);
        if (userReg !== null) {
            let user = userReg.groups['user'];
            let password = userReg.groups['pass'];
            console.log('Registration was successful');
            console.log(`Username: ${user}, Password: ${password}`);
            countRegistrations++;
        }else{
            console.log('Invalid username or password');
        }
    }
    console.log(`Successful registrations: ${countRegistrations}`);
}
registration(['3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'])