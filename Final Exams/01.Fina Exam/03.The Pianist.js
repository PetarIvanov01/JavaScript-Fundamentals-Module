function thePianist(input) {

    let amountPeaces = Number(input.shift())
    let peaceObj = {}

    for (let i = 0; i < amountPeaces; i++) {
        let [name, composer, key] = input.shift().split(`|`)
        peaceObj[name] = {
            composer,
            key,
        }
    }

    while (input[0] !== `Stop`) {
        let tokens = input.shift().split(`|`)
        let command = tokens[0]
        let piece = tokens[1]

        switch (command) {
            case `Add`:
                if (!peaceObj.hasOwnProperty(piece)) {
                    peaceObj[piece] = {
                        composer: tokens[2],
                        key: tokens[3],
                    }
                    console.log(`${piece} by ${tokens[2]} in ${tokens[3]} added to the collection!`);
                }
                else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            case `Remove`:
                if (peaceObj.hasOwnProperty(piece)) {
                    console.log(`Successfully removed ${piece}!`);
                    delete peaceObj[piece]
                }
                else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case `ChangeKey`:
                if (peaceObj[piece] == undefined) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    peaceObj[piece].key = tokens[2];
                    console.log(`Changed the key of ${piece} to ${tokens[2]}!`)
                }
        }
    }
    for (const key in peaceObj) {
        console.log(`${key} -> Composer: ${peaceObj[key].composer}, Key: ${peaceObj[key].key}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)