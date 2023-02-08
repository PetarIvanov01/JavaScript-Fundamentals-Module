function palindromeInt(array) {

    let copyArr = []
    for (const el of array) {
        copyArr.push(el)
    }

    let result = []

    for (let i = 0; i < copyArr.length; i++) {

        let firstNumb = String(copyArr[i])
        let splitNumbe = firstNumb.split('')
        let reversedNumb = splitNumbe.reverse()
        let joinedNumb = reversedNumb.join(``);

        let parseToNumb = Number(joinedNumb)
        result.push(parseToNumb)

        if (copyArr[i] === result[i]) {
            console.log(`true`);
        }
        else {
            console.log(`false`);
        }
    }
    

}
palindromeInt([32, 2, 232, 1010])