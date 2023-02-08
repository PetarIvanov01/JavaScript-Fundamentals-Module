function storage(input) {
    let map = new Map()

    for (let el of input) {
        el = el.split(` `)
        let product = el[0]
        let quantity = Number(el[1])

        if (map.has(product)) {
            let newQuantity = map.get(product) + quantity
            map.set(product,newQuantity)
        }else{
            map.set(product,quantity)
        }

    }

    for (let el of map.keys) {
        console.log(`${el} -> ${map.get(el)}`);
    }
    // for (const el of map) {
    //     console.log(`${el[0]} -> ${el[1]}`);
    // }

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])