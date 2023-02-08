function distinctArray(array) {

    for (let i = 0; i < array.length; i++) {
        let firstNumb = array[i]

        for (let j = i; j < array.length; j++) {
            let secondNumb = array[j+1]

            if (firstNumb === secondNumb) {
                array.splice(j+1,1)
                j--
            }
       
        }
    }
    console.log(array.join(` `));
}
distinctArray([0, 3, 1, 0, 0, 0, 0, 0, 2])