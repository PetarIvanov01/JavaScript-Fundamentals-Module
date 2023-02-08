function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let count = 0

    for (let room of input.split(`|`)) {
        count++
        let [command, number] = room.split(` `)

        switch (command) {
            case `potion`:
                let healing = Number(number)
                let currentHealth = health + healing
                if (currentHealth > 100) {
                    health = 100
                    healing = 100 - (currentHealth - healing)
                } else {
                    health = healing + health
                }
                console.log(`You healed for ${healing} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case `chest`:
                let amount = Number(number)
                bitcoins += amount
                console.log(`You found ${amount} bitcoins.`);
                break;
            default:
                let attack = Number(number)
                health -= attack
                if (health <= 0) {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${count}`);
                    return;
                }
                else {
                    console.log(`You slayed ${command}.`);
                }
                break;
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")