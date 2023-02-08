function loadBar(number) {
    let loaded = `%`.repeat(number/10)
    let notLoaded = `.`.repeat(10 - loaded.length)


    if (notLoaded.length === 0) {
        console.log(`100% Complete!`);
    }else{
        console.log(`${number}% [${loaded}${notLoaded}]`);
        console.log(`Still loading...`);
    }
}
loadBar(50)