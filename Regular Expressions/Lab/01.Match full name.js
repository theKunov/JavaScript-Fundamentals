function solve(str) {
    let regexp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = str[0].match(regexp);
    console.log(result.join(' '));
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
)