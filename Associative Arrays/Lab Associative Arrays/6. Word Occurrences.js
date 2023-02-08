function wordSorted(array) {

    let object = new Map()
    let count = 0

    for (let element of array) {

        if (!object.has(element)) {
            count++
            object.set(element, count)
            count = 0
        }
        else {
            let temp = object.get(element)
            temp++
            object.set(element, temp)

        }
    }

    let map = new Map([...object.entries()].sort((a, b) => b[1] - a[1]))

    
    for (let key of map) {
        console.log(`${key[0]} -> ${key[1]} times`);
    }

}
wordSorted(["Here", "is", "the", "first", "sentence",

    "Here", "is", "another", "sentence", "And",

    "finally", "the", "third", "sentence"])