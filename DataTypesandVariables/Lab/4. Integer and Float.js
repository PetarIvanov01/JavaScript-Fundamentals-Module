function Class(num1, num2, num3) {
    let sym = num1+ num2 + num3;

    if (sym % 1 === 0) {
        console.log(`${sym} - Integer`);
    }
    else{
        console.log(`${sym} - Float`);
    }
}
Class(9, 100, 1.1)
Class(100, 200, 303)