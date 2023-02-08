function solve(params) {
    let armies = {};
    let armyLeaders = [];
 
    for (let param of params) {
        if (param.includes('arrives')) {
            let indexOfArrives = param.indexOf('arrives');
            let leader = param.slice(0, indexOfArrives).trim();
            if (!armies.hasOwnProperty(leader)) {
                armies[leader] = {
                    armiesName: {},
                    totalArmyCount: 0
                };
            }
            armyLeaders.push(leader);
        } else if (param.includes('defeated')) {
            let indexOfDefeated = param.indexOf('defeated');
            let leader = param.slice(0, indexOfDefeated).trim();
            let indexOfLeader = armyLeaders.indexOf(leader);
            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
                armyLeaders.splice(indexOfLeader, 1);
            }
        } else if (param.includes(':')) {
            let [leader, army] = param.split(': ');
            let [armyName, armyCount] = army.split(', ');
            if (armies.hasOwnProperty(leader)) {
                if (!armies[leader].armiesName.hasOwnProperty(armyName)) {
                    armies[leader].armiesName[armyName] = Number(armyCount);
                    armies[leader].totalArmyCount += Number(armyCount);
                }
            }
        } else if (param.includes('+')) {
            let [armyName, armyCount] = param.split(' + ');
            armyLeaders.forEach(leader => {
                for (let army in armies[leader]) {
                    if (armies[leader][army].hasOwnProperty(armyName)) {
                        armies[leader].armiesName[armyName] += Number(armyCount);
                        armies[leader].totalArmyCount += Number(armyCount);
                    }
                }
            });
        }
    }
    // console.log(armies);
    Object.entries(armies)
        .sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount)
        .forEach(army => {
            console.log(`${army[0]}: ${army[1].totalArmyCount}`);
            Object.entries(army[1].armiesName)
                .sort((a, b) => b[1] - a[1])
                .forEach(armyName => {
                    console.log(`>>> ${armyName[0]} - ${armyName[1]}`)
                });
        });
}
solve(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350', 'Britox + 4500',
    'Porter arrives', 'Porter: Legion,55000',
    'Legion + 302', 'Rick Burr defeated',
    'Porter: Retix, 3205'])