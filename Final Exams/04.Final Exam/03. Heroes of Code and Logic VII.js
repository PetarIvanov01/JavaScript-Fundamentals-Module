function heroesOfCode(input) {

    let numbOfHeroes = Number(input.shift())
    let collection = {}
    for (let i = 0; i < numbOfHeroes; i++) {
        let commands = input.shift().split(` `)
        let hero = commands[0]
        let hp = Number(commands[1])
        let mana = Number(commands[2])
        collection[hero] = {
            hero,
            hp,
            mana,
        }
    }
    let currentRow = input.shift()

    while (currentRow !== `End`) {
        let commands = currentRow.split(` - `)
        let type = commands.shift()

        switch (type) {
            case `CastSpell`:
                let heroName = commands[0]
                let mpNeeded = Number(commands[1])
                let spellNeeded = commands[2]
                castSpell(heroName, mpNeeded, spellNeeded)
                break;
            case `TakeDamage`:
                let heroTakenDmg = commands[0]
                let damage = Number(commands[1])
                let attacker = commands[2]
                takeDamage(heroTakenDmg, damage, attacker)
                break;
            case `Recharge`:
                let heroRecharge = commands[0]
                let amount = Number(commands[1])
                recharge(heroRecharge, amount)
                break;
            case `Heal`:
                let heroHeal = commands[0]
                let amountHeal = Number(commands[1])
                heal(heroHeal, amountHeal)
                break;
        }

        currentRow = input.shift()
    }

    for (const key in collection) {
        console.log(collection[key].hero);
        console.log(`  HP: ${collection[key].hp}`);
        console.log(`  MP: ${collection[key].mana}`);
    }

    function castSpell(heroName, mpNeeded, spell) {
        if (collection[heroName].mana >= mpNeeded) {
            collection[heroName].mana -= mpNeeded
             console.log(`${heroName} has successfully cast ${spell} and now has ${collection[heroName].mana} MP!`);
        }
        else {
             console.log(`${heroName} does not have enough MP to cast ${spell}!`);
        }
    }
    function takeDamage(heroName, damage, attacker) {

        collection[heroName].hp -= damage
        if (collection[heroName].hp <= 0) {
            console.log(`${heroName} has been killed by ${attacker}!`);
            delete collection[heroName]
        }
        else {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${collection[heroName].hp} HP left!`);
        }

    }
    function recharge(heroName, amount) {
        let increasedMana = collection[heroName].mana + amount
        if (increasedMana > 200) {
            console.log(`${heroName} recharged for ${200 - collection[heroName].mana} MP!`);
            collection[heroName].mana = 200
        }
        else {
            collection[heroName].mana = increasedMana
            console.log(`${heroName} recharged for ${amount} MP!`);
        }
        
    }
    function heal(heroName, amount) {
        let increasedHeal = collection[heroName].hp + amount
        if (increasedHeal > 100) {
            console.log(`${heroName} healed for ${100 - collection[heroName].hp} HP!`);
            collection[heroName].hp = 100
        }
        else {
            collection[heroName].hp = increasedHeal
            console.log(`${heroName} healed for ${amount} HP!`);
        }
        
    }
}
heroesOfCode([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ])