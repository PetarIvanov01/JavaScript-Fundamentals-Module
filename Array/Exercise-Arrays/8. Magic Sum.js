function Class(arr, number) {
    let copyArr = []

    for (const el of arr) {
        copyArr.push(el)
    }

    let arrL = copyArr.length

    let validPari = ''
    let result = []
    for (let i = 0; i < arrL; i++) {

        let number1 = copyArr[i];
        for (let j = i; j < arrL; j++) {

            let number2 = copyArr[j + 1]

            if (number1 + number2 === number) {
                validPari = `${number1} ${number2}`;
                result.push(validPari)
                
            }
        }
    }
    console.log(result.join(`\n`));
}
Class([1, 2, 3, 4, 5, 6], 6)