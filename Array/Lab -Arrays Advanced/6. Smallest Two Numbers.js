function smallestTwoNumb(array) {

    let sortSmallestNumbers = array.sort((a, b) => a - b).slice(0,2) 

    return sortSmallestNumbers.join(` `)

    
}
let result = smallestTwoNumb([30, 15, 50, 5])
console.log(result);