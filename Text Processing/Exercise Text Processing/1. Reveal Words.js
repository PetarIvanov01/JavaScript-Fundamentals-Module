function revealWords(words, str) {

    words = words.split(`, `)
    
    for (const word of words) {
        
        let template = '*'.repeat(word.length)
        str = str.replace(template,word)
        
    }
    console.log(str);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')