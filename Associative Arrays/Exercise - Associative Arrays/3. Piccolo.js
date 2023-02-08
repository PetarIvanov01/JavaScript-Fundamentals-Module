function piccolo(input) {

    let parkingList = {}
    let fullList = input.map(el => el.split(`, `))

    for (const [direction, carNumb] of fullList) {
        if (direction === `IN`) {
            parkingList[carNumb] = undefined
        }
        else if (direction === `OUT`) {
            delete parkingList[carNumb]
        }
    }
    let sorted = Object.entries(parkingList).sort((a, b) => a[0].localeCompare(b[0]))

    if (sorted.length === 0) {
        console.log(`Parking Lot is Empty`);
    }
    sorted.forEach(el => {
        console.log(el[0]);
    })
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])