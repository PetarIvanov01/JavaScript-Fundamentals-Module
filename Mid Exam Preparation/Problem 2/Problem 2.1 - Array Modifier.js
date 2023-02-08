function arrModifier(array) {

    let myArr = array.shift().split(` `).map(Number)

    for (let i = 0; i < array.length; i++) {

        let [command, indexOne, indexTwo] = array[i].split(` `)

        switch (command) {
            case `swap`:
                let temp = myArr[indexOne];
                myArr[indexOne] = myArr[indexTwo];
                myArr[indexTwo] = temp;
                break;
            case `multiply`:
                let multiply = myArr[indexOne] * myArr[indexTwo];
                myArr.splice(indexOne,1,multiply)
                break;
            case `decrease`:myArr =  myArr.map(el => el- 1)
                break;
        }
    }
    console.log(myArr.join(`, `));
}
arrModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)