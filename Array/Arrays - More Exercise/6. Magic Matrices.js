function matrix(arr) {

    let isMagical = false
    let columnsArr = []
    let rowsArr = []
    for (let i = 0; i < arr.length; i++) {
        let sumColum = 0
        for (let j = 0; j < arr.length; j++) {
            let numberCol = arr[j][i]
            sumColum += numberCol
        }
        columnsArr.push(sumColum)
    }

    for (let i = 0; i < arr.length; i++) {
        let sumRows = 0
        for (let k = 0; k < arr.length; k++) {
            let numberRow = arr[i][k]
            sumRows += numberRow
        }
        rowsArr.push(sumRows)
    }

    for (let k = 0; k < arr.length; k++) {
        if (rowsArr[k] === columnsArr[k]) {
            isMagical = true
        }else{
            isMagical = false
        }
    }
    console.log(isMagical);




} matrix
    ([[11, 32, 45], [21, 0, 1], [21, 1, 1]])



