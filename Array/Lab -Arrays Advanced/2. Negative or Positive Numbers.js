function negativeOrPositive(array) {

    let result = []

    for (let i = 0; i < array.length; i++) {
        let number = Number(array[i])

        if (number < 0) {
            result.unshift(number)
        } else {
            result.push(number)
        }

    }
    return result.join(`\n`);
}
let result = negativeOrPositive(['3', '-2', '0', '-1'])
console.log(result);