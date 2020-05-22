function solve(text) {
    let result = text.split(' ');
    let checker = true;
    for (const m of result) {
        if (m.startsWith('#') && m.length > 1) {
            let print = m.split('');
            print.shift();
            for (const char of print) {
                let check = char.charCodeAt();
                if ( check >= 65 && check <= 90 ||
                check >= 97 && check <= 122)  {
                    
                }else{
                    checker = false;
                }
                
            }
            if (checker) {
                console.log(print.join(''));

            }
            checker = true;
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')