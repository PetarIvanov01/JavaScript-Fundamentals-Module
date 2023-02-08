function Class(array) {
    
    let sumOriginal = 0
    let sumChanged = 0
    for (let i = 0; i < array.length; i++) {
        sumOriginal += array[i]

        if (array[i] % 2 === 0) {
            array[i] += i
        } else {
            array[i] -= i
        }
        sumChanged += array[i]


    }
    
    console.log(array);
    console.log(sumOriginal);
    console.log(sumChanged);

}
Class([5, 15, 23, 56, 35])