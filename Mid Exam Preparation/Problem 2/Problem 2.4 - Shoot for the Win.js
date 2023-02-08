function shootWin(array) {

    let shootSequence = array.shift().split(` `).map(Number)
    let shootCount = 0
    let command = array.shift()
    let splicedNumb = 0
    
    while (command !== `End`) {
       
        let indexToShot = Number(command)
        let indexNotValid = false
        if (indexToShot < shootSequence.length) {
            shootCount++
            splicedNumb = Number(shootSequence.splice(indexToShot, 1, -1));
        } else {
            indexNotValid = true;
        }
        if (indexNotValid == false) {
            for (let i = 0; i < shootSequence.length; i++) {
                if (shootSequence[i] > splicedNumb && shootSequence[i] != -1) {
                    shootSequence[i] -= splicedNumb
                } else if (shootSequence[i] <= splicedNumb && shootSequence[i] != -1) {
                    shootSequence[i] += splicedNumb
                }
            }
        }
        command = array.shift().toString()
    }
    console.log(`Shot targets: ${shootCount} -> ${shootSequence.join(` `)}`);
}

shootWin(["0 -1 0 0 0 0",
"1",
"1",
"1",
"0",
"End"])

