function blackFlag(array) {
    let days = Number(array.shift())
    let plunderForDay = Number(array.shift())
    let expected = Number(array.shift())
    let addedPlunder = plunderForDay / 2

    let allPlunder = 0
    for (let i = 1; i <= days; i++) {
        
        allPlunder += plunderForDay
        
        if (i % 3 == 0) {
            allPlunder +=addedPlunder
        }
        if (i % 5 == 0) {
            allPlunder -= (allPlunder * 0.30)
        }
    }
    if (allPlunder >= expected) {
        console.log(`Ahoy! ${allPlunder.toFixed(2)} plunder gained.`);
    }else{
        let percent = (allPlunder / expected) *100 
       
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }

}
blackFlag(["10",
    "20",
    "380"])
