function Class(string) {
    let result = []
    for (let j = string.length; j >= 0; j--) {
        result.push(string[j])
    }
    console.log(result.join(" "));

}
Class(['a', 'b', 'c', 'd', 'e'])