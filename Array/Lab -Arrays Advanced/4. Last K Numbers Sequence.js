function lastKSequence(n, k) {

    let sequence = [1,1]

    let elIndex = 1

    for (let i = 0; i < n - 1; i++) {

        let otherEL =  sequence[elIndex] + sequence[elIndex - 1]
        sequence.push(otherEL)

        elIndex++
    }
    return sequence.join(` `)
}

let result = lastKSequence(6, 3)
console.log(result);