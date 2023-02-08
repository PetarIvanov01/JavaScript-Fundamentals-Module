function Class(numbers) {
    let result = []
    for (let el of numbers) {
        result.push(el) 
    }
   
    while (result.length > 1) {
        let temp = []
        for (let i = 0; i < result.length - 1; i++) {
            temp[i] = result[i] + result[i + 1]
            
        }
        result = temp
    }
    console.log(parseInt(result));
    
}
Class([2,10,3])
Class([5,0,4,1,2])