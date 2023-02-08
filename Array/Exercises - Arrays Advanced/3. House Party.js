function houseParty(array) {

    let result = []
    let copyArr = array.slice()

    for (let i = 0; i < copyArr.length; i++) {

        let lineCommand = array[i].split(` `)
        let name = lineCommand[0]
        let command = lineCommand[2]

        if (command !== `not`) {
            if (result.includes(name) === true) {
                console.log(`${name} is already in the list!`)
                continue;
            }
            result.push(name);
        }
        else {
            if (result.includes(name) === false) {
                console.log(`${name} is not in the list!`);
                continue;
            }
            result = result.filter(x => x != name)
        }

    }
    console.log(result.join(`\n`));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])