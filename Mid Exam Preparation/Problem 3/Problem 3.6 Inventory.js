function inventory(input) {

    let collectedItems = input.shift().split(`, `)

    let currentRow = input.shift()

    while (currentRow !== `Craft!`) {
        let [type, material] = currentRow.split(` - `)

        switch (type) {
            case `Collect`:
                if (!collectedItems.includes(material)) {
                    collectedItems.push(material)
                }
                break;
            case `Drop`:
                if (collectedItems.includes(material)) {
                    let index = collectedItems.indexOf(material)
                    collectedItems.splice(index,1)
                }
                break;
            case `Combine Items`:
                let [oldItem,newItem] = material.split(`:`);
                if (collectedItems.includes(oldItem)) {
                    let index = collectedItems.indexOf(oldItem);
                    collectedItems.splice(index+1,0,newItem)
                }
                break;
            case `Renew`:
                if (collectedItems.includes(material)) {
                    let index = collectedItems.indexOf(material)
                    let item = collectedItems.splice(index,1)
                    collectedItems.push(item.join(``))
                }
                break;
        }
        currentRow = input.shift()
    }
    console.log(collectedItems.join(`, `));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])