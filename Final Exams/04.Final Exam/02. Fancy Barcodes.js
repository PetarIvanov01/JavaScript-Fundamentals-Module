function fancyBarcode(input) {

    let nBarcode = Number(input.shift());
    let pattern = /@#+(?<product>[A-Z][a-zA-Z0-9]{4,}[A-Z])@#+/
    let digits = /\d/
    //let digits = /[0-9]/
    let productGroup = {};
    for (let i = 0; i < nBarcode; i++) {
        let command = pattern.exec(input.shift())

        if (command == null) {
            console.log(`Invalid barcode`);
            continue;
        }
        else {
            let word = command.groups.product
            let number = [...word].filter(char => digits.test(char)).join('');
            //let number = (word.match(digits) || ['0', '0']).join('')
            if (number > 0) {
                console.log(`Product group: ${number}`);
            } else {
                console.log(`Product group: 00`);
            }
            
        }
    }
    command = pattern.exec(input[0])
}

fancyBarcode(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])


