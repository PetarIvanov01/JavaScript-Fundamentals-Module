function town(input) {

    let object = {};

    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(` | `)
        object.town = data[0]
        object.latitude = Number(data[1]).toFixed(2)
        object.longitude = Number(data[2]).toFixed(2)

        console.log(object);
    
    }
        
        
    
    




}
town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])