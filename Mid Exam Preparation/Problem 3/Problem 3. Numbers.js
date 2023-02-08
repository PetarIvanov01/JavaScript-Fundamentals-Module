function sequence(input) {
    let arr = input.split(` `).map(Number)

    let sumNumbers = arr.reduce((x, y) => x + y)
    let notFoundBigger = false;
    let averageNumbers = sumNumbers / arr.length;
    for (const el of arr) {
        if (averageNumbers > el) {
            notFoundBigger = true
        }
    }
    if (notFoundBigger) {
        let biggerNumb = arr.filter(el => el > averageNumbers).sort((a, b) => b - a)
        let splicedBiggerNumb = biggerNumb.splice(5, arr.length)
        console.log(biggerNumb.join(` `));
    }else{
        console.log(`No`);
    }


}
sequence('5 2 3 4 -10 30 40 50 20 50 60 60 51')
// console.log(`-----------------`);
sequence('10 20 30 40 50')
// console.log(`----------`);
sequence('1')