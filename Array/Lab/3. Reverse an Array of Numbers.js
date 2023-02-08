function Class(n, numbers) {
    let result = []
    for (let j = n; j >= 0; j--) {
        result.push(numbers[j])
    }
    console.log(result.join(" "));

}
Class(4, ['a', 'b', 'c', 'd', 'e'])