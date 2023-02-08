function CLass(pageNumb, pageFor1Hour, daysToFinishTheBook) {
    let totalTime = pageNumb / pageFor1Hour
    let requaredHoursPerDay = totalTime / daysToFinishTheBook;
    console.log(requaredHoursPerDay);
}
CLass(212,
    20,
    2)