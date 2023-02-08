function Class(array) {

    
    let copyArray = []
    for (const el of array) {
        copyArray.push(el)
    }

    let arrayL = copyArray.length
    let maxSiequence = []

    for (let i = 0; i < arrayL; i++) {

        let currentSiquence = []
        for (let j = i; j < arrayL; j++) {

            if (copyArray[i] === copyArray[j]) {
                currentSiquence.push(copyArray[i])
            }
            else {
                break;
            }

        }
        if (maxSiequence.length < currentSiquence.length) {
            maxSiequence = currentSiquence
        }

    }
    console.log(maxSiequence.join(` `));

}
Class([2 ,1 ,1 ,2, 3, 3, 2, 2, 2, 1])