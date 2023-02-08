function passwordReset(input) {

    let string = input.shift()

    let currentRow = input.shift()

    while (currentRow !== `Done`) {

        let commands = currentRow.split(` `)
        let typeOfCommand = commands.shift()

        switch (typeOfCommand) {
            case `TakeOdd`:
                let result = ``;
                for (let i = 0; i < string.length; i++) {
                    if (i % 2 !== 0) {
                        result += string[i]
                    }
                }
                string = result
                console.log(string);
                break;
            case `Cut`:
                let index = Number(commands[0])
                let length = Number(commands[1])
                let firstPart = string.substring(0,index)
                let lastPart = string.substring(index+length,)
                string = firstPart + lastPart
                console.log(string);
                break;
            case `Substitute`:
                let substring = commands[0]
                let substitute = commands[1]
                if (string.includes(substring)) {
                    string = string.split(substring).join(substitute)
                    console.log(string);
                }
                else{
                    console.log(`Nothing to replace!`);
                }
                
                break;
        }
        currentRow = input.shift()
    }
    console.log(`Your password is: ${string}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
