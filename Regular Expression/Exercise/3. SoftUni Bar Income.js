function solve(input) {

    input.pop()
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|%$.]*<(?<product>\w+)>[^|%$.]*\|(?<count>[0-9]+)\|[^0-9|%$.]*(?<price>[0-9|\.]+)\$/g
    let totalIncome = 0
    let collection = {}
    let currentRow = pattern.exec(input)
  
    while (currentRow !== null) {
  
      let name = currentRow.groups.name
      let product = currentRow.groups.product
      let count = Number(currentRow.groups.count)
      let price = Number(currentRow.groups.price)
  
      let totalPrice = count * price
      totalIncome += totalPrice
      collection[name] = [product, totalPrice.toFixed(2)]
  
  
      currentRow = pattern.exec(input)
    }
  
    for (const key in collection) {
      console.log(`${key}: ${collection[key].join(` - `)}`);
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
  }
  solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])