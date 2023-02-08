function secretChat(input) {

    let concealedMassage = input.shift()

    let command = input.shift()

    while (command !== `Reveal`) {
        let commands = command.split(`:|:`)

        switch (commands.shift()) {
            case `ChangeAll`:
                let substringToRepl = commands[0]
                let replacement = commands[1]
                concealedMassage = concealedMassage.split(substringToRepl).join(replacement)
                console.log(concealedMassage);
                break;
            case `Reverse`:
                let substringMes = commands[0]
                if (concealedMassage.includes(substringMes)) {
                   let index = concealedMassage.indexOf(substringMes)
                   let lastIndex = index + substringMes.length 
                   let reversed = substringMes.split(``).reverse().join(``)
                   let firstPart = concealedMassage.substring(0,index)
                   let lastPart = concealedMassage.substring(lastIndex,)
                   concealedMassage = firstPart + lastPart + reversed
                   console.log(concealedMassage);
                }
                else {
                    console.log(`error`);
                }
                break;
            case `InsertSpace`:
                let index = Number(commands[0])
                let firstPart = concealedMassage.substring(0, index);
                let lastPart = concealedMassage.substring(index,);
                concealedMassage = firstPart + ` ` + lastPart;
                console.log(concealedMassage);
                break;
        }
        command = input.shift()
    }
      console.log(`You have a new text message: ${concealedMassage}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])
  
  