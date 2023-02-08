function games(input) {

    let games = input[0].split(` `);

    for (let i = 1; i < input.length; i++) {
        let typeOfCommand = input[i].split(` `)
        let command = typeOfCommand[0]
        let game = typeOfCommand[1]

        if (command === `Play!`) {
            break;

        } else if (command === `Install` && games.includes(game) === false) {
            games.push(game);

        } else if (command === `Uninstall` && games.includes(game)) {
            let index = games.indexOf(game);
            games.splice(index, 1)

        } else if (command === `Update` && games.includes(game)) {
            let index = games.indexOf(game);
            games.splice(index, 1)
            games.push(game)

        } else if (command === `Expansion`) {
            let expansion = game.split('-')
            let expanGame = expansion[0]

            if (games.includes(expanGame)) {

                let expandedGame = expansion.join(':');
                let index = games.indexOf(expanGame);
                games.splice(index + 1 , 0 ,expandedGame)

            }

        }

    }

    console.log(games.join(` `));

} games(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])