function sortArray(array) {
    let sortResult = array.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b)
    })

    console.log(sortResult.join(`\n`));

    
    
}
sortArray(['alpha',

'beta',

'gamma'])