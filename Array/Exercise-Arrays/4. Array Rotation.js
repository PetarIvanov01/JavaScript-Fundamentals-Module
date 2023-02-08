function Class(array, rotation) {

    let copyArr =[]
    for (const el of array) {
        copyArr.push(el)
    }


    
    while (rotation > 0) {
       let  firstElement = copyArr.shift()
       copyArr.push(firstElement)
       rotation--
    }
 console.log(copyArr.join(` `));


}
Class([51, 47, 32, 61, 21], 2)