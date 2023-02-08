function Class(arr) {
    let evenSum = 0
    let oddSum = 0

    for (let i of arr) {
        if (i % 2 === 0) {
            evenSum += i
        }
        else {
            oddSum += i
        }
    }
    console.log(evenSum - oddSum);
}
Class([1,2,3,4,5,6])