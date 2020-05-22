function login(username) {
    let usName = username[0]
    //console.log(usName);
    
    let b = 1
    let counter = 0;
    for (let i = 1; i <= 4; i++) {
        let input = username[b]
        let password = "";
        for (let n = input.length ; n >= 0; n--) {
            password += input.charAt(n);

        }
        counter++;
        if (password != usName && counter == 4) {
            console.log(`User ${usName} blocked!`);
            break;
        }
        if (password == usName) {
            console.log(`User ${usName} logged in.`)
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
        b++;
    }

}
login([
   'Acer',
   'login',
   'go',
   'let me in',
   'recA'
    ]
)