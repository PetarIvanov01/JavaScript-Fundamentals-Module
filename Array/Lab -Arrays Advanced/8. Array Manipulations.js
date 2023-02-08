function arrayManipulation(array) {


    let allNumbers = array.shift().split(` `).map(Number)



    for (let i = 0; i < array.length; i++) {
        let [command, firstNum, secondNum] = array[i].split(` `)

        firstNum = Number(firstNum)
        secondNum = Number(secondNum)

        switch (command) {
            case `Add`: allNumbers.push(firstNum)
                break;
            case `Remove`:
                for (let i = 0; i < allNumbers.length; i++) {
                    if (firstNum === allNumbers[i]) {
                        allNumbers.splice(i,1)
                    }
                }
                break;
            case `RemoveAt`:
                allNumbers.splice(firstNum,1)
                break;
            case `Insert`:
                allNumbers.splice(secondNum,0,firstNum)
                break
        }
    }
    console.log(allNumbers.join(` `));
}
arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])