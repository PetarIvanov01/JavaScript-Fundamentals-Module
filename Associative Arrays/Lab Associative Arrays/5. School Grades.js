function schoolGrades(input) {
    let map = new Map()

    for (let el of input) {
        let commands = el.split(` `)
        let name = commands[0]
        let grades = commands.splice(1, commands.length).map(Number)

        if (!map.has(name)) {
            map.set(name, [])
            map.set(name, map.get(name).concat(grades))
        }
        else {
            map.set(name, map.get(name).concat(grades))
        }
    }

    let sorted = Array.from(map).sort()

    for (let el of sorted) {
        console.log(`${el[0]}: ${(el[1].reduce((a, b) => a + b, 0) / el[1].length).toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])