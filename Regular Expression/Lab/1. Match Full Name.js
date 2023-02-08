function fullName(input) {
    let pattern = /(=|\/)(?<country>[A-Za-z]{3,})\1/g
    let matched = pattern.exec(input)

    let validName = []
    while (matched !== null) {
        validName.push(matched[0])

        matched = pattern.exec(input)
    }
    console.log(validName.join(` `));

}
fullName(`ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov`)