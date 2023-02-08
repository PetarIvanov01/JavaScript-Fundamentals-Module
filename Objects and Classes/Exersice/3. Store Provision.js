function store(currentStock, localStock) {

    let currentObj = {}

    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i]
        currentObj[product] = Number(currentStock[i + 1])
    } 

    for (let i = 0; i < localStock.length; i += 2) {
        let localProduct = localStock[i]
        
        if (!currentObj.hasOwnProperty(localProduct)) {
            currentObj[localProduct] = 0
        }
        currentObj[localProduct] += Number(localStock[i+1])
    }
   
    
  for (const key in currentObj) {
    console.log(`${key} -> ${currentObj[key]}`);
  }



}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
])