function emojiDetector(input) {

    let coolThreshold = 1
    let patternForDig = /(?<digit>\d)/gm
    let patternEmoji = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g

    let emojiCol = []
    let coolEmoji = []

    let commandDigit = patternForDig.exec(input)
    while (commandDigit !== null) {

        let digit = commandDigit.groups.digit
        coolThreshold *= Number(digit)
        commandDigit = patternForDig.exec(input)

    }

    let command = patternEmoji.exec(input)
    while (command !== null) {
        let emoji = command.groups.emoji
        let coolness = 0
        for (const char of emoji) {
            coolness += char.charCodeAt(0)
        }
        if (coolness > coolThreshold) {
            coolEmoji.push(command[0])
        }
        emojiCol.push(command[0])
        
        command = patternEmoji.exec(input)
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojiCol.length} emojis found in the text. The cool ones are:`);
    coolEmoji.forEach(el => console.log(el))
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])