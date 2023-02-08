function nonDecreasin(array) {
    
    let result = []
    let maxNumber = Number.MIN_VALUE
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
            result.push(maxNumber)
        }
    }
    console.log(result.join(` `));


}
nonDecreasin([1, 3, 8, 4, 10, 12, 3, 2, 24])