function treasureHunt(input) {
    let myTreasure = input.shift().split(`|`)

    let index = 0
    let command = input[index]
    index++

    while (command !== `Yohoho!`) {

        let currentItems = command.split(` `)
        let currentCommand = currentItems.shift()
        
        if (currentCommand === `Loot`) {
            for (let i = 0; i < currentItems.length; i++) {
                if (!myTreasure.includes(currentItems[i])) {
                    myTreasure.unshift(currentItems[i])
                }
            }
        }
        else if (currentCommand === `Drop` && Number(currentItems) <= myTreasure.length) {
            myTreasure.push(myTreasure.splice(Number(currentItems), 1).join(``))
        }
        else if (currentCommand === `Steal`) {
            let stolenItems = myTreasure.splice(-currentItems, currentItems)
            console.log(stolenItems.join(`, `));
        }

        command = input[index]
        index++
    }
    if (myTreasure.length === 0 ) {
        console.log(`Failed treasure hunt.`);
    }else{ 
    let sumOfLoot = myTreasure.map(el => el = el.length).reduce((x,y) => x + y)
    console.log(`Average treasure gain: ${(sumOfLoot/myTreasure.length).toFixed(2)} pirate credits.`);
    }
}
treasureHunt([`Diamonds|Silver|Shotgun|Gold`, `Loot Silver Medals Coal`,`Drop 10`,`Drop 1`,`Steal 6`,`Yohoho!`])