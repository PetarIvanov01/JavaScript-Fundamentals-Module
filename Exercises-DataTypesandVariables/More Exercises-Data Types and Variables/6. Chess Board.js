function Class(num) {
    let size = Number(num);
    let currentColour = `black`
    let oldColour = "";

    console.log(`<div class="chessboard">`);
    for (let rows = 1; rows <= size; rows++) {
        console.log(`  <div>`);

        for (let columns = 1; columns <= size; columns++) {
            console.log(`    <span class="${currentColour}"></span>`);

            oldColour = currentColour;
            if (oldColour === `black`) {
                currentColour = `white`
            }else{
                currentColour = 'black'
            }
        }
        console.log('  </div>')
        if (size % 2 === 0) {
            currentColour = oldColour
            if (oldColour === `white`) {
                currentColour === `white`
            }else{
                currentColour = `black`
            }
        }
    }
    console.log(` </div>`);
}
Class(6)