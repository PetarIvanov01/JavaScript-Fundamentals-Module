function orders(array) {

    let product = ""
    let quantity = 0;
    for (let i = 0; i < array.length - 1; i++) {
        product = array[i]
        quantity = array[i + 1]
    }


    switch (product) {
        case `coffee`: sum = quantity * 1.50
            break;
        case `water`: sum = quantity * 1.00
            break;
        case `coke`: sum = quantity * 1.40
            break;
        case `snacks`: sum = quantity * 2.00
            break
    }

    console.log(sum.toFixed(2));

    //return sum 



}
orders(["water", 5])
//console.log(allOrders.toFixed(2));