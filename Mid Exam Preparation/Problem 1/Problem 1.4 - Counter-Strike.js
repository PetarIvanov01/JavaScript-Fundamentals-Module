function counterStrike(array) {
    let energy = Number(array.shift())

    let command = array.shift()
    let count = 0
    while (command !== `End of battle`) {

        if (energy >= command) {
            energy -= Number(command)
            count++
        }
        else {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            return
        }

        if (count % 3 === 0) {
            energy += count
        }

        command = array.shift()
    }
    console.log(`Won battles: ${count}. Energy left: ${energy}`);

}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
