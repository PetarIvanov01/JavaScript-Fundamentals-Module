function pirates(input) {

    let collection = {};
    let currentRow = input.shift()
    let count = 0

    while (currentRow !== `Sail`) {

        let commands = currentRow.split(`||`)
        let city = commands[0]
        let population = Number(commands[1])
        let gold = Number(commands[2])
        if (!collection.hasOwnProperty(city)) {
            collection[city] = {
                city,
                population,
                gold,
            }
            count++
        } else {
            collection[city].population += population
            collection[city].gold += gold
        }
        
        currentRow = input.shift()
    }

    while (input[0] !== `End`) {
        let commands = input[0].split(`=>`)
        let typeOfCommand = commands.shift()
        switch (typeOfCommand) {
            case `Plunder`: plunder(commands[0], Number(commands[1]), Number(commands[2]))
                break;
            case `Prosper`: prosper(commands[0], Number(commands[1]))
                break;
        }
        input.shift()
    }

    if (count > 0) {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
        for (const key in collection) {
            console.log(`${key} -> Population: ${collection[key].population} citizens, Gold: ${collection[key].gold} kg`);
        }
    }
    else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }

    function plunder(town, population, gold) {
        let deadPopulation = collection[town].population - population
        let stolenGold = collection[town].gold - gold
        
        collection[town].population = deadPopulation
        collection[town].gold = stolenGold
        console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);
        if (deadPopulation == 0 || stolenGold == 0) {
            console.log(`${town} has been wiped off the map!`);
            delete collection[town]
            count--
        }
    }

    function prosper(town, gold) {
        let increasedGold = collection[town].gold + gold
        if (collection[town].gold > increasedGold) {
            console.log(`Gold added cannot be a negative number!`);
        }
        else {
            collection[town].gold = increasedGold
            console.log(`${gold} gold added to the city treasury. ${town} now has ${increasedGold} gold.`);
        }
    }
}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

