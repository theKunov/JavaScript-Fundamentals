function solve(str) {
    let work = str.toLowerCase().split(' ');
    let output = {};
    for (const iterator of work) {
        if (!output.hasOwnProperty(iterator)) {
            output[iterator] = 0
        }
        output[iterator] += 1
    }
    let print = [];
    Object.entries(output).forEach(entry => {
        if (entry[1] % 2 !== 0 ) {
           print.push(entry[0]);
        }
    });
    console.log(print.join(' '));
    

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')