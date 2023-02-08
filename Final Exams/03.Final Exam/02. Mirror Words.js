function mirrorWords(input) {
    let pattern = /(@|#)(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/gm

    let command = pattern.exec(input)
    let pairs = []
    let mirrorWords = []

    while (command !== null) {

        let firstWord = command.groups.firstWord
        let secondWord = command.groups.secondWord
        pairs.push(firstWord, secondWord)

        command = pattern.exec(input)
    }
    for (let i = 0; i < pairs.length; i += 2) {
        let reversed = pairs[i + 1].split(``).reverse().join(``)
        if (pairs[i] == reversed) {
            mirrorWords.push(`${pairs[i]} <=> ${pairs[i + 1]}`)
        }
    }
    if (pairs.length == 0) {
        console.log(`No word pairs found!`);
    }
    else{
      console.log(`${pairs.length / 2} word pairs found!`);  
    }
    if (mirrorWords.length == 0) {
        console.log(`No mirror words!`);
    }
    else{
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(`, `));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])