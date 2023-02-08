function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;

    let numbertostring = number.toString()

    for (let i = 0; i < numbertostring.length; i++) {
        let digit = Number(numbertostring[i])

        if (digit % 2 === 0) {
            evenSum += digit
        }
        else {
            oddSum += digit
        }

    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234)