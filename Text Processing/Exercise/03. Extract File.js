function solve(text) {
    let fileInfo = text.lastIndexOf('\\');
    let exInfo = text.lastIndexOf('.')
    let file = text.substring(fileInfo+1, exInfo);
    let ex = text.substring(exInfo +1)
    
    console.log(`File name: ${file}\nFile extension: ${ex}`);

}
solve('C:\\Internal\\training-internal\\Template.pptx')