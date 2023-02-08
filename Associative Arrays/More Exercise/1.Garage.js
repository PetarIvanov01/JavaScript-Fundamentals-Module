function garage(input) {

    let carCollection = {}

    for (const el of input) {
        let [number, ...carInfo] = el.split(` - `)
        
        if (!carCollection.hasOwnProperty(number)) {
            carCollection[number] = []

        }
        carCollection[number].push(carInfo)
    }

    let output = ``
    for (let [number, carInfo] of Object.entries(carCollection)) {
        console.log(`Garage № ${number}`);
        for (let currentCar of carInfo) {
            let replacedCar = currentCar.join(``).replace(/: /g,` - `);
            console.log(`--- ${replacedCar}`);
        }
    }
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])