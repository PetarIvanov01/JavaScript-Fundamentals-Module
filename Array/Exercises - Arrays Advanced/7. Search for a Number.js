function searchForNumber(array,commandArr) {
    
    let takenNumber = commandArr.shift();
    let deletedNumber = commandArr.shift();
    let searchedNumber = commandArr.shift()

    let takenArr = []

    for (let i = 0; i < takenNumber; i++) {
        takenArr.push(array[i])
    }

    takenArr.splice(0,deletedNumber)
    
    let includesCount = 0
    for (const el of takenArr) {
        if (searchedNumber == el) {
            includesCount++
        }
    }

    console.log(`Number ${searchedNumber} occurs ${includesCount} times.`);
        
}
searchForNumber([7, 1, 5, 5, 2, 7], [4, 1, 5])