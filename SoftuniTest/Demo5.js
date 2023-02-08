function Class(input) {
    let target = Number(input[0]);

    let typeHaricut = "";
    let typeBoq = "";
    let priceHarcut = 0
    let index = 1;
    let command = input[index];
    while (command !== `closed`) {
        command = input[index] //postrivjka
        index++
        if (command === `haircut`) {
            typeHaricut = input[index]
            switch (typeHaricut) {
                case `mens`: priceHarcut += 15
                    break;
                case `ladies`: priceHarcut += 20
                    break;
                case `kids`: priceHarcut += 10
                    break;
            }
        }
        if (command === `color`) {
            typeBoq = input[index];
            switch (typeBoq) {
                case `touch up`: priceHarcut += 20
                    break;
                case `full color`: priceHarcut += 30
                    break;
            }
        }
        if (priceHarcut >= target ) {
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${priceHarcut}lv.`);
            break;
        }
    }
    if (priceHarcut < target) {
        let diff = target - priceHarcut;
         console.log(`Target not reached! You need ${diff}lv. more.`);
         console.log(`Earned money: ${priceHarcut}lv.`);
    }
   
}
Class(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"])
