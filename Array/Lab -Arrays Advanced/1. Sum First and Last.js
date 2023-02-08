function sumTwoParms(array) {

    let firstNum = Number(array.shift())
    let lastNum = Number(array.pop())

    return firstNum + lastNum
   
    
}
let result = sumTwoParms(['20', '30', '40'])
console.log(result);