function Class(num) {
    num = num.toString()
    let digit = ""
    let decime = 0;
    let decimelDigit = num.length - 1
    for (let i = 0; i < num.length; i++) {
        digit = Number(num[i])
        for (let j = num.length - i-1; j >= 0; j--) {
            decime += digit * Math.pow(2, j)
            if (digit > -1) {
                break;
            }
        }
    } console.log(parseInt(decime));

}
Class('00001001')