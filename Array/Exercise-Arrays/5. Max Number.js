function Class(arr1) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {

        let number1 = arr1[i]
        let isBigger = true

        for (let j = i + 1; j < arr1.length; j++) {

            let number2 = arr1[j]
            if (number1 <= number2) {
                isBigger = false
            }

        }
        if (isBigger) {
            result.push(number1)
        }
        
    }
    console.log(result.join(` `));
}
Class([1, 4, 3, 2])