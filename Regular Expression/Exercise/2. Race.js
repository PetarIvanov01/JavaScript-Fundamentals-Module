function race(input) {

    let raceArray = input.shift()
    let namePattern = /[A-Za-z]+/g
    let distancePattern = /[0-9]+/g
    let racerObj = {}

    let currentRow = input.shift()
    while (currentRow !== `end of race`) {

        const name = currentRow.match(namePattern).join(``)
        const distance = currentRow.match(distancePattern).join(``)
        if (raceArray.includes(name)) {
            let allDistance = 0
            for (const digit of distance) {
                allDistance += Number(digit)
            }
            if (!racerObj.hasOwnProperty(name)) {
                racerObj[name] = allDistance
            }
            else {
                racerObj[name] += allDistance
            }
        }

        currentRow = input.shift()
    }
    console.log(racerObj);
    let sortedRacers = Object.entries(racerObj).sort((a,b)=>b[1]-a[1])

    
    let firstRacer = sortedRacers[0][0]
    let secondRacer = sortedRacers[1][0]
    let thirdRacer = sortedRacers[2][0]

    console.log(`1st place: ${firstRacer}`);
    console.log(`2nd place: ${secondRacer}`);
    console.log(`3rd place: ${thirdRacer}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])