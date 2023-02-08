function convertToObject (input) {
    let object = JSON.parse(input)
    
    for (const key of Object.entries(object)) {
        console.log(key.join(`: `));
    }
    
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')