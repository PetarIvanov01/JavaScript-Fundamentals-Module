function sort(array) {

    let copyArr = array.slice(0)
    let result = []

    for (let i = 0; i < copyArr.length; i++) {
        if (array.length === 1) {
            result.push(array[0])
            break
        }
        let maxNumb = Math.max(...array)
        result.push(maxNumb)
        let indexMax = array.indexOf(maxNumb);
        array.splice(indexMax,1)
       
        
        let minNumb = Math.min(...array)
        result.push(minNumb)
        let indexMin = array.indexOf(minNumb)
        array.splice(indexMin,1)

        if (array.length === 0) {
            break;
        }
    }
    

    console.log(result.join(` `));

}
sort([1])
sort([34, 2, 32, 45, 690, 6, 32,7, 19, 47])