function shop(input) {

    let pattern = /[>]{2}(?<product>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]?[\d]+)!(?<quantity>[\d]+)/g
    let totalPrice = 0
    input.pop()

    let currentRow = pattern.exec(input)
    console.log(`Bought furniture:`);
    while (currentRow !== null) {

        let product = currentRow.groups.product
        let price = currentRow.groups.price
        let quantity = currentRow.groups.quantity

        totalPrice += price * quantity

        currentRow = pattern.exec(input)

        console.log(product);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
shop(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])