function Class(digit) {
    let digitToString = digit.toString()

    switch (digitToString) {
        case 'zero': digitToString = parseInt(0)
            break;
        case 'one':digitToString = parseInt(1)
            break;
        case 'two':digitToString = parseInt(2)
            break;
        case 'three':digitToString = parseInt(3)
            break;
        case 'four':digitToString = parseInt(4)
            break;
        case 'five':digitToString = parseInt(5)
            break;
        case 'six':digitToString = parseInt(6)
            break;
        case 'seven':digitToString = parseInt(7)
            break;
        case 'eight':digitToString = parseInt(8)
            break;
        case 'nine':digitToString = parseInt(9)
            break
    }
    console.log(digitToString);


}
Class('nine')
