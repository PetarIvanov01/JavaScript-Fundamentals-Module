function perfectNumb(numb) {

    let sumOfDivisior = 1;

    for (let currentNumb = 2; currentNumb < numb; currentNumb++) {
        if (numb % currentNumb === 0) {
            sumOfDivisior += currentNumb
        }
    }
    if (sumOfDivisior === numb) {
        console.log(`We have a perfect number!`);
    }else{
        console.log(`It's not so perfect.`);
    }
}
perfectNumb(6)