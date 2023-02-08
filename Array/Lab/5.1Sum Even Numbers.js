function Class(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i])
        
        
    }
    for (let j of array) {
            if (j % 2 === 0) {
                sum +=j
            }
        }
    console.log(sum);
}
Class(['1','2','3','4','5','6'])