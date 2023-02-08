function repeatString(array) {

    let string = ''
    let number = 0

    for (let i = 0; i < array.length - 1; i++) {
        string = array[i]
        number = array[i + 1]
    }
    let buff = ""
    for (let i = 0; i <number; i++) {
        buff+=string
    }
    
    return buff 

}
let allStrings = repeatString([ 'abc', '3' ])
console.log(allStrings);