function movingTarget(array) {
    let targetsArr = array.shift().split(` `).map(Number)
    let command = array.shift()

    while (command !== `End`) {
        let type = command.split(` `)

        switch (type[0]) {
            case `Shoot`:
                let shotIndex = Number(type[1])
                let power = Number(type[2])
                if (shotIndex < targetsArr.length && shotIndex >= 0) {
                    targetsArr[shotIndex] -= power
                    if (targetsArr[shotIndex] <= 0) {
                        targetsArr.splice(shotIndex, 1)
                    }
                }
                break;
            case `Add`:
                let addIndex = Number(type[1])
                let value = Number(type[2])
                if (addIndex < targetsArr.length && addIndex >= 0) {
                    targetsArr.splice(addIndex, 0, value)
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            case `Strike`:
                let strikeIndex = Number(type[1])
                let radius = Number(type[2])
                let start = strikeIndex - radius
                let end = strikeIndex + radius
                if (start >= 0 && end < targetsArr.length) {
                    targetsArr.splice(start, radius * 2 + 1)
                }
                else {
                    console.log(`Strike missed!`);
                }
                break;
        }

        command = array.shift()
    }
    console.log(targetsArr.join(`|`));

}
// movingTarget(["52 74 23 44 96 110",
//     "Shoot 5 10",
//     "Shoot 1 80",
//     "Strike 2 1",
//     "Add 22 3",
//     "End"])
movingTarget(["1 2 3 4 5",
    "Add 4 6",
    "End"])
