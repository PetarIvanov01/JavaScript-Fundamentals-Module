function signCheck(numOne, numTwo, numThree) {

    let array = [];
    
    array.push(numOne, numTwo, numThree);

    let filtered = array.filter(el => {
        if (el < 0) {
            return el
        }
    })
    if (filtered.length == 0 || filtered.length == 2) {
        console.log(`Positive`);
    }
    else {
        console.log(`Negative`);
    }
}
signCheck(-5, -6, 7)