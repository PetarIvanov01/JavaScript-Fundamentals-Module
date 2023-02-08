function spiralMatrix(allRows, allColumns) {

    let startCol = 0
    let endCol = 0
    let startRow = 0
    let endRow = 0
    let number = 1
    let result = []

    for (let i = 1; i <= allRows; i++) {
       
        result.push(number)
         number++
    }
    console.log(result);
}

spiralMatrix(5, 5)