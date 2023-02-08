function splitter(input) {
    
    let result = ''
    for (let char of input) {
        let code = char.charCodeAt(0)
    
        if (code >= 97 && code <= 122) {
            result += char
        } 
        else {
            result += `, ${char}`
        }
    }
    console.log(result.substring(2));
    
}
splitter('SplitMeIfYouCanHaHaYouCantOrYouCan')