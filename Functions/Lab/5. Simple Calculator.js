function simpleCalculator(array) {
    let a = 0
    let b = 0
    let operator = ''

    for (let i = 0; i < array.length; i++) {
        a = Number(array[i])
        b = Number(array[i + 1])
        operator = array[i + 2]
        break;
    }

    let sum = 0;
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let subtract = (x, y) => x - y;
    let add = (x, y) => x + y;

    switch (operator) {
        case `multiply`: sum = multiply(a,b)
            break;
        case `divide`: sum = divide(a,b)
            break;
        case `subtract`: sum = subtract(a,b)
            break;
        case `add`: sum = add(a,b)
    }
    console.log(sum);




}
simpleCalculator(['12', '19', 'multiply'])