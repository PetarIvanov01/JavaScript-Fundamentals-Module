function Class(input) {
    let amountDencer = Number(input[0])
    let points = Number(input[1]);
    let sezon = input[2];
    let mqsto = input[3];

    let sumPoints = 0
    let razhodi = 0

    if (mqsto === `Bulgaria`) {
        sumPoints = points * amountDencer;
        switch (sezon) {
            case `summer`: razhodi = sumPoints * 0.95
                break;
            case `winter`:razhodi = sumPoints * 0.92;
                break;
        }
    }

    else if (mqsto === `Abroad`) {
        sumPoints = (points * amountDencer) + ((points * amountDencer) / 2);
        switch (sezon) {
            case `summer`: razhodi = sumPoints * 0.90;
                break;
            case `winter`:razhodi = sumPoints * 0.85;
                break;
        }
    }

    let charityMoney = razhodi * 0.75;
    let moneyLeft = razhodi - charityMoney
    let moneyDencar = moneyLeft / amountDencer

    console.log(`Charity - ${charityMoney.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyDencar.toFixed(2)}`);
}
Class(["1",
"89.5",
"summer",
"Abroad"])
