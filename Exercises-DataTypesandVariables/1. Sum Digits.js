function Class(number) {
    let numberToString = number.toString()
    let sum = 0
    for (let i = 0; i < numberToString.length; i++) {
        let currentDigits = Number(numberToString[i])
        sum += currentDigits

    }
    console.log(sum);
}
Class(245678)