function city (input) {

    for (let key of Object.entries(input)) {
        console.log(key.join(` -> `));
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438, 
    country: "Bulgaria", 
    postCode: "1000"
})