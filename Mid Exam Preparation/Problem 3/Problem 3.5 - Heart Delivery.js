function heartDelivery(array) {
    let neighborhoodHearts = array.shift().split(`@`).map(Number)

    let command = array.shift()
    let cupidIndex = 0
    while (command !== `Love!`) {
        
        let commands = command.split(` `)
        let cupidPlace = Number(commands[1])
        cupidIndex += cupidPlace

        if (cupidIndex < neighborhoodHearts.length) {
            if (neighborhoodHearts[cupidIndex] === 0) {
                console.log(`Place ${cupidIndex} already had Valentine's day.`);
            } else {
                neighborhoodHearts[cupidIndex] -= 2
                if (neighborhoodHearts[cupidIndex] === 0) {
                    console.log(`Place ${cupidIndex} has Valentine's day.`);
                }
            }
        }
        else {
            cupidIndex = 0
            if (neighborhoodHearts[cupidIndex] === 0) {
                console.log(`Place ${cupidIndex} already had Valentine's day.`);
            } else {
                neighborhoodHearts[cupidIndex] -= 2
                if (neighborhoodHearts[cupidIndex] === 0) {
                    console.log(`Place ${cupidIndex} has Valentine's day.`);
                }
            }
        }

        command = array.shift()
    }
    console.log(`Cupid's last position was ${cupidIndex}.`);
    let count = 0
    neighborhoodHearts.forEach(element => {
        if (element !== 0) {
            count++
        }
    });
    if (count > 0) {
        console.log(`Cupid has failed ${count} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
}
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])
// heartDelivery(["2@4@2",
// "Jump 2",
// "Jump 2",
// "Jump 8",
// "Jump 3",
// "Jump 1",
// "Love!"])

