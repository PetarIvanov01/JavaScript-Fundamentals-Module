function partyTime(input) {

    let vipList = []
    let regularList = []
    let command = input.shift()

    while (command !== `PARTY`) {
        let isVip = !isNaN(command[0])
        if (isVip) {
            vipList.push(command)
        }
        else {
            regularList.push(command)
        }
        command = input.shift()
    }

    let allGuest = vipList.concat(regularList)
    let uniqueGuest = new Set()

    for (let guest of input) {
        if (allGuest.includes(guest)) {
            allGuest.splice(allGuest.indexOf(guest), 1)
        }
    }
    console.log(allGuest.length);
    allGuest.forEach(el => console.log(el))

}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])