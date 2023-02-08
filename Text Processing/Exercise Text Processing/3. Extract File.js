function extractFiles(input) {

    let index = input.lastIndexOf(`\\`)
    let lastFile = input.substring(index + 1).split(`.`)
    let extension = lastFile.pop()
    
    let file = lastFile.join(`.`)
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}
extractFiles('C:\\Internal\\training-internal\\Template.pptx')