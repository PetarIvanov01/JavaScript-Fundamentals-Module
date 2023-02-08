function cardGame (input) {
    let type = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    let power = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    let result = {}
    for (const el of input) {
        let [name ,gameCards] = el.split(`: `)
        let cards = gameCards.split(`, `)
        
        if (!result.hasOwnProperty(name)) {
            result[name] = cards
        }
    }
    

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])