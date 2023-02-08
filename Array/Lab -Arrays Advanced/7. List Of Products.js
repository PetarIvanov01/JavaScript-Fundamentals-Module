function listOfProducts(arrayProducts) {
    
    let sorted = arrayProducts.sort()
    let counter = 0

    for (let i = 0; i < sorted.length; i++) {
        counter++
        let product = sorted[i]
        
        console.log(`${counter}.${product}`);
    }

}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])