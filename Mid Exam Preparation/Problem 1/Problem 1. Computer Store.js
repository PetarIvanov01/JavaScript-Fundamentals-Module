function computerStor(array) {

    let command = array.pop()
    array = array.map(Number)

    let totalPrice = 0;
    let finalPrice = 0;

    for (let i = 0; i < array.length; i++) {

        let partsPrice = array[i]

        if (partsPrice <= 0) {
            console.log(`Invalid price!`);
            continue;
        }

        totalPrice += partsPrice;

    }
    let discountPrice = totalPrice * 0.20

    if (command === `special`) {
        finalPrice = (totalPrice + discountPrice) * 0.9
    }
    else {
        finalPrice = (totalPrice + discountPrice)
    }
    if (finalPrice === 0) {
        console.log(`Invalid order!`);
    }
    else {
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${discountPrice.toFixed(2)}$`);
        console.log(`-----------\nTotal price: ${finalPrice.toFixed(2)}$`);
    }
}
computerStor([

    '1050',

    '200',

    '450',

    '2',

    '18.50',

    '16.86',

    'special'

])