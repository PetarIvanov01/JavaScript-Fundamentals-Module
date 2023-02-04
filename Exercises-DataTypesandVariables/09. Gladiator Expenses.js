function Class(lostFight, helmetPrice, swordPrice, shiledPrice, armorPrice) {
    let expenses = 0
    let shieldBrokeCount = 0;
    let helmetCounter = 0;
    let swordCounter = 0;
    let armorCounter = 0
    let lostFightCounter = 0
    for (let currentFight = 1; currentFight <= lostFight; currentFight++) {
        lostFightCounter++
        if (lostFightCounter % 2 === 0) {
            helmetCounter++
            expenses += helmetPrice
        }
        if (lostFightCounter % 3 === 0) {
            swordCounter++
            expenses += swordPrice;
        }
        if (lostFightCounter % 6 === 0) {
            shieldBrokeCount++;
            expenses += shiledPrice;
            if (shieldBrokeCount % 2 === 0) {
                armorCounter++
                expenses += armorPrice
            }
        }
        if (armorCounter = 0) {
            armorPrice = 0
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
Class(23,

    12.50,

    21.50,

    40,

    200)