function Class(number) {
    let DayOfTheWeek = []
    if (number < 1  || number > 7) {
        console.log(`Invalid day!`);
    }else{
        DayOfTheWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        console.log(DayOfTheWeek[number-1]);
    }
    
}
Class(11)