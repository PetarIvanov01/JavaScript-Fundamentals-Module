function modernTimes(str) {
    let specialWords = []

    str = str.split(` `)
    for (const el of str) {
        if (el[0] == '#' && el.length > 1) {
            specialWords.push(el.substring(1))
        }
    }

    let flag = false
    for (const word of specialWords) {
        let el = word.split(``)
        for (const letter of el) {
            if (letter.toLowerCase().charCodeAt(0) >= 97 && letter.toLowerCase().charCodeAt(0) < 123) {
                flag = true;
            }
            else {
                flag = false
                break;
            }
        }
        if (flag) {
            console.log(word);
        }
    }
}
modernTimes('The symbol #a54a is known #variously in English-speaking #socialMedia as the #number sign')