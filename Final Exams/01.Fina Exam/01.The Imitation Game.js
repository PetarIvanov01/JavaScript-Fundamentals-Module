function game(input) {

    let move = (numOfLetters) => {
        numOfLetters = Number(numOfLetters)
        let firstLetters = encryptedMessage.substring(0, numOfLetters)
        let lastLetters = encryptedMessage.substring(numOfLetters)
        return encryptedMessage = lastLetters + firstLetters
    }
    let insert = (index, value) => {
        index = Number(index)
        let firstPart = encryptedMessage.substring(0,index)
        let lastPart = encryptedMessage.substring(index)

        return encryptedMessage = firstPart.concat(value).concat(lastPart)
    }
    let changeALl = (substr, replacement) => {
        let changedString = encryptedMessage.split(substr).join(replacement)
        return encryptedMessage = changedString
    }

    let encryptedMessage = input.shift()

    let commands = input.shift()

    while (commands !== `Decode`) {
        let command = commands.split(`|`)

        switch (command[0]) {
            case `Move`: move(command[1])
                break;
            case `Insert`: insert(command[1], command[2])
                break;
            case `ChangeAll`: changeALl(command[1], command[2])
                break;
        }
        commands = input.shift()
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);
}
game([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])