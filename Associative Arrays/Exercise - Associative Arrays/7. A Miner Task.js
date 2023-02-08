function minerTask (input) {
    
    let object = {}
    for (let i = 0; i < input.length; i+=2) {
        let resource = input[i]
        let quantity = Number(input[i+1])

        if (!object.hasOwnProperty(resource)) {
        object[resource] = quantity
        }
        else{
            object[resource] += quantity
        }
    }
    Object.entries(object).forEach(el => console.log(`${el[0]} -> ${el[1]}`))
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    `Gold`,
    `10`
    ])