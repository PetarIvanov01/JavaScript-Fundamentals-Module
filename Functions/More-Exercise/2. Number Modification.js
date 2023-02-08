function numberModification(num) {

    let splitNumb = num.toString().split(``).map(Number)
    let sum = splitNumb.reduce((a, b) => a + b)
    let averageSum = sum / splitNumb.length

    while (5 > averageSum) {

        splitNumb.push(9)
        sum = splitNumb.reduce((a, b) => a + b)
        averageSum = sum / splitNumb.length

    }
    console.log(splitNumb.join(``));
}
numberModification(101)