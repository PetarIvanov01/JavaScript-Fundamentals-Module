function manOWar(array) {

    let pirateShip = array.shift().split(`>`).map(Number);
    let warShip = array.shift().split(`>`).map(Number);
    let maxHealth = Number(array.shift());

    let type = array.shift();
    let isDead = false;

    while (type != `Retire`) {
        if (isDead === true) {
            break;
        }
        let splittedType = type.split(` `);
        let command = splittedType[0];
        let indexOne = splittedType[1];
        let indexTwo = splittedType[2];
        let indexThree = splittedType[3];

        switch (command) {
            case `Fire`:
                fire(indexOne, indexTwo);
                break;
            case `Defend`:
                defend(indexOne, indexTwo, indexThree);
                break;
            case `Repair`:
                repair(indexOne, indexTwo);
                break;
            case `Status`:
                status();
                break
        }

        type = array.shift();
    }

    if (!isDead) {
        let warShipPoint = warShip.reduce((acc, el) => acc + el, 0);
        let pirateShipPoints = pirateShip.reduce((acc, el) => acc + el, 0);

        console.log(`Pirate ship status: ${pirateShipPoints}`);
        console.log(`Warship status: ${warShipPoint}`);
    }

    function fire(index, damage) {
        index = Number(index);
        damage = Number(damage);
        if (index >= 0 && index < warShip.length) {
            warShip[index] = warShip[index] - damage;
            if (warShip[index] <= 0) {
                isDead = true;
                console.log(`You won! The enemy ship has sunken.`);
                return;
            }
        }
    }

    function defend(startIndex, endIndex, damage) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        damage = Number(damage);
        if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= startIndex && endIndex <= pirateShip.length - 1)) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;
                if (pirateShip[i] <= 0) {
                    isDead = true;
                    console.log(`You lost! The pirate ship has sunken.`);
                    return;
                }
            }
        }
    }

    function repair(index, health) {
        indexRep = Number(index);
        let healthRep = Number(health);
        if (indexRep >= 0 && indexRep < pirateShip.length) {
            pirateShip[indexRep] += healthRep
            if (pirateShip[index] > maxHealth) {
                pirateShip[index] = maxHealth;
            }
        }
    }

    function status() {
        let less = maxHealth * 0.2;
        let count = 0;
        for (let i= 0 ; i < pirateShip.length; i++) {
            if (pirateShip[i] < less) {
                count++;
            }
        }
        console.log(`${count} sections need repair.`);
    }
}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
