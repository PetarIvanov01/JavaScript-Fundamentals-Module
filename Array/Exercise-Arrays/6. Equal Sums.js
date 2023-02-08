function Class(array) {

    let isFound = `no`
    let arrayL = array.length

    for (let i = 0; i < arrayL; i++) {
        
        let leftNumb = 0;
        let rightNumb = 0;
        for (let l = 0; l < i; l++) {
            leftNumb += array[l]
        }
        for (let r = i + 1; r < arrayL; r++) {
            rightNumb += array[r]
        }

        if (leftNumb === rightNumb) {
            isFound = i
        }

    }
    console.log(isFound);
}
Class([1, 2, 3, 3])