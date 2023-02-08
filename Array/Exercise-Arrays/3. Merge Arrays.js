function Class(arr1, arr2) {
    let result = []
    let evenNumb = 0
    let oddNumn = ``
    let indexArr2 = 0

    for (let i = 0; i < arr1.length ; i++ , indexArr2++) {
        if (i % 2 === 0) {
            result.push(Number(arr1[i]) + Number(arr2[indexArr2]))
            
        } else {
            result.push(arr1[i] + arr2[indexArr2])
        }
        
    }
   
    console.log(result.join(` - `));

}
Class(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])