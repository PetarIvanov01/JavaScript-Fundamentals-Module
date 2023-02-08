function carWash(array) {

    let value = 0

    for (const el of array) {
        switch (el) {
            case `soap`: value += 10
                break;
            case `water`: value = value + (value * 0.20)
                break;
            case `vacuum cleaner`: value = value + (value * 0.25)
                break;
            case `mud`: value = value - value * 0.10
                break;
        }
    }
    
    console.log(`The car is ${value.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',
    'water'])