function guineaPig(array) {
    let [foodGr, hayGr, coverGr, pigGr] = array.map(Number).map(el => el * 1000)
    let days = 1

    while (days <= 30) {
        
        foodGr -= 300
        if (days % 2 === 0) {
            hayGr -= (foodGr * 5) / 100
        }
        if (days % 3 === 0) {
            coverGr -= pigGr * 0.3333
        }
        days++;

    }
    let foodKg = foodGr /1000
    let hayKg = hayGr / 1000;
    let coverKg = coverGr / 1000;

    if (foodGr <= 0 || hayGr <= 0 || coverGr <= 0) {
        console.log(`Merry must go to the pet store!`);
    } 
    else {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`);
    }
}
guineaPig(["10", "5", "5.2", "1"])
// guineaPig(["1", 
// "1.5", 
// "3", 
// "1.5"
// ])
