function train(array) {


    let passForEachWagon = array.shift().split(` `).map(Number)

    let maxCapacityForWagon = Number(array.shift())

    let commands = array.join(` `).split(` `)
    
    for (let i = 0; i < commands.length; i++) {

        if (commands[i] === `Add`) {
            let addWagon = Number(commands[i + 1])
            passForEachWagon.push(addWagon)
            i++
        }
        else {
            let addPass = Number(commands[i])
            for (let j = 0; j < passForEachWagon.length; j++) {
                let passengers = addPass + passForEachWagon[j]
                
                if (passengers <= maxCapacityForWagon) {
                    passForEachWagon[j] = passengers
                    break;
                }
            }
        }
    }
    return passForEachWagon.join(` `)

}

console.log(train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']));

