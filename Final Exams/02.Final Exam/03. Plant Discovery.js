function plantDisc(input) {

    let nLines = Number(input.shift());
    let plantObj = {}

    for (let i = 0; i < nLines; i++) {
        let [plant, rarity] = input.shift().split(`<->`)
        plantObj[plant] = {
            plant,
            rarity,
            rating: 0,
            count: 0
        }
    }
console.log(plantObj);
    let currentRow = input.shift()
    while (currentRow !== `Exhibition`) {
        let command = currentRow.split(` - `).join(` `).split(` `)

        if (plantObj.hasOwnProperty(command[1])) {
            switch (command[0]) {
                case `Rate:`:

                    let counter = 1
                    let plant = command[1]
                    let rating = Number(command[2])
                    
                    plantObj[plant][`rating`] += rating
                    plantObj[plant][`count`] += counter
                    
                    break;
                case `Update:`:

                    let plantT = command[1]
                    let newRarity = Number(command[2])
                    plantObj[plantT][`rarity`] = newRarity

                    break;
                case `Reset:`:

                    let resetPlant = command[1]
                    plantObj[resetPlant][`rating`] = 0
                    plantObj[resetPlant][`count`] = 0
                    break;
            }
        }
        else {
            console.log(`error`);
        }
        currentRow = input.shift()
    }

    console.log(`Plants for the exhibition:`);
    for (const key in plantObj) {

        let averageCount = plantObj[key][`rating`] / plantObj[key][`count`] || 0; 
        console.log(`- ${key}; Rarity: ${plantObj[key][`rarity`]}; Rating: ${(averageCount).toFixed(2)}`);

    }
}
plantDisc(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])