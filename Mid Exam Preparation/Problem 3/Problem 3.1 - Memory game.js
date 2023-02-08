function memoryGame(array) {

    let sequence = array.shift().split(` `)
    let moves = 0

    for (let i = 0; i < array.length - 1; i++) {
        let [indexOne, indexTwo] = array[i].split(` `)
        indexOne = Number(indexOne)
        indexTwo = Number(indexTwo)
        if (sequence.length === 0) {
            break;
        }

        if (typeof sequence[indexOne] === "undefined" ||
            typeof sequence[indexTwo] === "undefined" ||
            indexTwo === indexOne) {
            console.log(`Invalid input! Adding additional elements to the board`);
            moves++
            sequence.splice(sequence.length / 2, 0, -moves + "a", -moves + "a")
        } else if (sequence[indexOne] === sequence[indexTwo]) {
            moves++;
            let spliced = sequence.splice(Math.min(indexOne, indexTwo), 1)
            sequence.splice(Math.max(indexOne, indexTwo) - 1, 1)
            console.log(`Congrats! You have found matching elements - ${spliced}!`);
        }
        else if (sequence[indexOne] !== sequence[indexTwo]) {
            moves++
            console.log(`Try again!`);
        }
    }

    if (sequence.length === 0) {
        console.log(`You have won in ${moves} turns!`);
    }
    else {
        console.log(`Sorry you lose :(`);
        console.log(sequence.join(` `));
    }
}
// memoryGame([
//     "1 1 2 2 3 3 4 4 5 5", 
//     "1 0",
//     "-1 0",
//     "1 0", 
//     "1 0", 
//     "1 0", 
//     "end"
//     ])
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)
// memoryGame([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ]
//)