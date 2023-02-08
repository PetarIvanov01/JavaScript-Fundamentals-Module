function solve(input) {
    let firstRow = input.shift().split(` `)
    let secondRow = input.shift().split(` `)
    let left = 0
    let right = 0
    let rightL = secondRow.length
    let leftL = firstRow.length
    let iteration = Math.min(rightL, leftL)

    for (let i = 0; i < iteration; i++) {
        if (firstRow[i] === secondRow[i]) {
            left++
        }
    }
    let index = 1
    for (let i = iteration - 1; i >=0; i--) {
        if (firstRow[leftL - index] === secondRow[rightL - index]) {
            right++
            index++
        }
    }
    console.log(Math.max(left, right));
}