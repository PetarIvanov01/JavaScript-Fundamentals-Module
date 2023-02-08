function inventory(array) {
    let data = []
    
    for (const heroInfo of array) {
        let [name, level, items] = heroInfo.split(` / `)        
        
        let currentHero = {
            Hero: name,
            level: +level,
            items: items
        }
        data.push(currentHero)

    }
    let sortedByLevel = data.sort((a,b) => a.level - b.level)
    sortedByLevel.forEach(el => {
        console.log(` Hero: ${el.Hero}\n level => ${el.level}\n items => ${el.items}`);
    })
}
inventory
    (['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ])