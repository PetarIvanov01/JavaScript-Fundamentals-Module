function manipulation(array, arrCommands) {

    let sumPairs = 0
let sumPairsAr = []
    let index = 0
    let commands = arrCommands[index]

    while (commands !== `print`) {
        let splitCommands = arrCommands[index].split(` `)
        let currentCommand = splitCommands.shift()
        splitCommands.map(Number)
        //console.log(currentCommand);

        switch (currentCommand) {
            case `add`:
                let indexToAdd = splitCommands[0]
                let elementToAdd = splitCommands[1]
                array.splice(indexToAdd, 0, elementToAdd)
                break;
            case `addMany`:
                let indexToAddMany = splitCommands.shift()
                array.splice(indexToAddMany, 0, ...splitCommands)
                array.map(Number)
                break;
            case `contains`:
                        console.log(array.indexOf(splitCommands[0]));
                break;
            case `remove`:
                let indexRemove = splitCommands[0]
                array.splice(indexRemove,1)
                break;
            case `shift`:
                for (let j = 0; j < splitCommands[0]; j++) {
                    array.push(array.shift())
                }
                break;
            case `sumPairs`:
                
                if (array.length % 2 !== 0) {
                    array.push(0)
                }
                for (let k = 0; k < array.length; k+=2) {
                   
                    sumPairs = Number(array[k]) + Number(array[k+1])
                    sumPairsAr.push(sumPairs)

                }
                array = [...sumPairsAr]
                break;
        }

        commands = arrCommands[index]
        index++
    }

    console.log(`[ ${array.join(`, `)} ]`);

    
}
// manipulation
//     ([1, 2, 4, 5, 6, 7],
//         ['add 1 8', 'contains 1', 'contains 3', 'print'])


manipulation([2, 2, 4, 2, 4],["add 1 4", "sumPairs", "print"])