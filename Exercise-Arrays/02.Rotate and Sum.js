function solve(input) {

    let arrOfNum = input.shift().split(` `).map(Number)
    let k = Number(input.shift())
    let sumArr = []

    for (let j = 0; j < arrOfNum.length; j++) {
        sumArr.push(0)
    }

    for (let i = 0; i < k; i++) {
        let lastEl = arrOfNum.pop()
        arrOfNum.unshift(lastEl)

        for (let j = 0; j < arrOfNum.length; j++) {
            sumArr[j] += arrOfNum[j]
        }

    }
    console.log(sumArr.join(` `));

}
solve(['1 2 3 4 5', '3'])