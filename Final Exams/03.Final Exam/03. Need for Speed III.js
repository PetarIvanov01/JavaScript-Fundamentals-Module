function needSpeed(input) {

    let cars = Number(input.shift())
    let carsCollection = {}

    for (let i = 0; i < cars; i++) {
        let [car, ...others] = input.shift().split(`|`)
        carsCollection[car] = {
            model: car,
            miles: Number(others[0]),
            fuel: Number(others[1]),
        }
    }

    let currentRow = input.shift()

    while (currentRow !== `Stop`) {
        let commands = currentRow.split(` : `)
        let typeOfCommand = commands.shift()

        switch (typeOfCommand) {
            case `Drive`:
                let car = commands[0]
                let distance = Number(commands[1])
                let fuel = Number(commands[2])
                if (carsCollection[car].fuel <= fuel) {
                    console.log(`Not enough fuel to make that ride`);
                }
                else {
                    carsCollection[car].miles += distance
                    carsCollection[car].fuel -= fuel
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }
                if (carsCollection[car].miles >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete carsCollection[car]
                }
                break;
            case `Refuel`:
                let carToRef = commands[0]
                let fuelToRef = Number(commands[1])
                let tankWithTheRefFuel = carsCollection[carToRef].fuel + fuelToRef
                if (tankWithTheRefFuel > 75) {
                    fuelToRef = 75 - carsCollection[carToRef].fuel 
                    carsCollection[carToRef].fuel = 75
                }
                else {
                    carsCollection[carToRef].fuel += fuelToRef
                }
                console.log(`${carToRef} refueled with ${fuelToRef} liters`);
                break;
            case `Revert`:
                let carRev = commands[0]
                let kilometers = Number(commands[1])
                carsCollection[carRev].miles -= kilometers
                if (carsCollection[carRev].miles <= 10000) {
                    carsCollection[carRev].miles = 10000
                    break;
                }
                console.log(`${carRev} mileage decreased by ${kilometers} kilometers`);
                break;
        }
        currentRow = input.shift()
    }
    for (const car in carsCollection) {
        console.log(`${car} -> Mileage: ${carsCollection[car].miles} kms, Fuel in the tank: ${carsCollection[car].fuel} lt.`);
    }

}
needSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )