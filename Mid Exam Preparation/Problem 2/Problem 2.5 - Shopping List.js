function shopList(array) {
    let listShop = array.shift().split(`!`)

    let type = array.shift()
    while (type !== `Go Shopping!`) {
        let command = type.split(` `)
        switch (command[0]) {
            case `Urgent`:
                let addItem = command[1];
                if (!listShop.includes(addItem)) {
                    listShop.unshift(addItem)
                }
                break;
            case `Unnecessary`:
                let removeItem = command[1];
                listShop = listShop.filter(el => el !== removeItem)
                break;
            case `Correct`:
                let oldItem = command[1];
                let newItem = command[2];
                if (listShop.includes(oldItem)) {
                    listShop = listShop.join(`!`)
                    listShop = listShop.replace(oldItem, newItem)
                    listShop = listShop.split(`!`)
                }
                break;
            case `Rearrange`:
                let rearrangeItem = command[1];
                if (listShop.includes(rearrangeItem)) {
                    let index = listShop.indexOf(rearrangeItem)
                    let splice = listShop.splice(index, 1)
                    listShop.push(splice)
                }
                break;
        }
        type = array.shift()
    }
    console.log(listShop.join(`, `));
}
// shopList(["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"])
shopList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
