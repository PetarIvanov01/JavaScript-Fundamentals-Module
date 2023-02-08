function wordsTracker(array) {
    let obj = {}
    let occurrencesToFind = array.shift().split(` `)
    
    for (const el of occurrencesToFind) {
        obj[el] = 0
    }
    for (let word of array) {
        if (obj.hasOwnProperty(word)) {
            obj[word]++
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1])
    sorted.forEach(el => console.log(`${el[0]} - ${el[1]}`))
    
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])