function mathPower(array) {

    let a = 0
    let b = 0;

    for (let i = 0; i < array.length-1; i++) {
     a = Number(array[i])
     b = Number(array[i+1])
        
    }


    let number = 1;
    for (let i = 1; i <= b; i++) {
        number *= 1 * a 
    }
    console.log(number);
}
mathPower([ '2', '8' ])