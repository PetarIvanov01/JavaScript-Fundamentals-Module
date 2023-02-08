function oddNumbers(array) {

    let result = []
    for (let i = 0; i < array.length; i++) {
        let numb = array[i]

        if (i % 2 !== 0) {
                numb *= 2
                result.push(numb)
        }
    }
    return result.reverse().join(` `)
}

let result = oddNumbers([3, 0, 10, 4, 7, 3])
console.log(result);