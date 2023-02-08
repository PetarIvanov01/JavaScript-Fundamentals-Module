function theLift(array) {
    
    let ppl = Number(array.shift())
    let freeSeats = array.join(` `).split(` `).map(Number)
    let wagonSpaceCount = 0;

    for (let i = 0; i < freeSeats.length; i++) {
        let currentWagon = Number(freeSeats[i])

        if (currentWagon <= 4) {
            if (ppl >= 4) {
                if (currentWagon != 0) {
                    ppl -= (4 - currentWagon);
                    currentWagon = 4;
                    freeSeats[i] = currentWagon;
                    //emptySpots = false;
                } else {
                    currentWagon = 4;
                    ppl -= currentWagon;
                    freeSeats[i] = currentWagon;
                }
            }
            else {
                currentWagon += ppl;
                ppl = 0;
                freeSeats[i] = currentWagon;
            }
        }
    }
    if (ppl != 0) {
        console.log(`There isn't enough space! ${ppl} people in a queue!`);
        console.log(freeSeats.join(' '));
    } else {
        for (let wagon of freeSeats) {
            
            if (wagon === 4) {
               wagonSpaceCount++;
            }
        }
        if (wagonSpaceCount != freeSeats.length) {
            console.log("The lift has empty spots!");
            console.log(freeSeats.join(' '))
        } else {
            console.log(freeSeats.join(' '))
        }
    }
}theLift(["15", "0 0 0 0 0"])