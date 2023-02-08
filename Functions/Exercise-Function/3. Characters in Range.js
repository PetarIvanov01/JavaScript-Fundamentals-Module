function printAssciCode(start, end) {

    let symbolStart = start.charCodeAt();
    let symbolEnd = end.charCodeAt();


    let arr = []
    if (symbolStart > symbolEnd) {
        for (let i = symbolStart - 1; i > symbolEnd; i--) {
            let result = String.fromCharCode(i)
            arr.push(result)

        }

        arr.reverse()
    }
    else {
        for (let i = symbolStart + 1; i < symbolEnd; i++) {

            arr.push(String.fromCharCode(i))
        }
    }

    console.log(arr.join(` `));

}

printAssciCode('C', '#')







// let text = `ivan`
// let letter = text[1]
// console.log(letter.charCodeAt());
